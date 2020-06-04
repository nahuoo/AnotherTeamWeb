import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import SynthSquare from '../../img/SynthSquare.png'
import Back from '../../img/stars.jpg'

const Plano = (props) => {

    const ref = useRef()
    const { camera, scene, clock } = useThree()
    const [ textures ] = useLoader(THREE.TextureLoader, [SynthSquare])
    const [ backtexture ] = useLoader(THREE.TextureLoader, [Back])
    const [toggle, setToggle ] = useState(true)
    const [ cameraPosition, setCameraPosition ] = useState(0)


    const handleCamera = () => {

       /*  setCameraPosition(+0.01)
        setTimeout(() => {
            setCameraPosition(0)
        }, 3000)*/
    } 

    useFrame(() => {

       
            /* camera.position.z -= cameraPosition * 4.4
            camera.position.x += -cameraPosition * 3.4
            camera.position.y -= cameraPosition / 1.5
            camera.rotateY((cameraPosition/ 2)) */
            camera.position.z = 3 - Math.cos( Math.sin(clock.elapsedTime) / 5 ) ;
            camera.position.x = 0 + -Math.sin( Math.cos(clock.elapsedTime) / 5 ) *1.5;
            camera.position.y = 1 + Math.cos( Math.sin(clock.elapsedTime) ) / 5 ;
                
            if (toggle){
                ref.current.material.color.r += 0.00270588  
                ref.current.material.color.g -= 0.002013073  
                ref.current.material.color.b -= 0.00118954 
                 
                if(ref.current.material.color.r > 0.811764705){
                    ref.current.material.color.r = 0.8117647058823529  
                    ref.current.material.color.g = 0.20372156862745098  
                    ref.current.material.color.b = 0.4627450980392157
                }
            }
            else if(!toggle){
                ref.current.material.color.r -= 0.00270588  
                ref.current.material.color.g += 0.002013073  
                ref.current.material.color.b += 0.00118954 

            }
        

          
    })

    const useMountEffect = (fun) => useEffect(fun, [])

    

    useMountEffect(() => {
        ref.current.rotateX(- Math.PI / 2)  
        camera.position.z = 3
        camera.position.x = 0
        camera.position.y = 2
        textures.wrapS = THREE.RepeatWrapping;
        textures.wrapT = THREE.RepeatWrapping;
        textures.repeat.set( 25, 25 )

        ref.current.material.map.needsUpdate = true
        scene.background = backtexture
        scene.fog = new THREE.FogExp2('rgb(207, 52, 118)', 0.05)
        console.log(clock)
        
    })
    useEffect(() => {

        setInterval(() => {
            setToggle(!toggle)
        }, 5000)
    }, )
    

    return (

        <mesh
        ref={ref}
        position={[0, 0, 1]}
        >
          <planeGeometry attach="geometry" args={[45, 45, 10, 10]} />
          <meshLambertMaterial attach="material" color={'rgb(0,206,209)'} map={textures}/>
        </mesh>
    )
}

export default Plano
