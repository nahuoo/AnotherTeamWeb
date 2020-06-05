import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import SynthSquare from '../../img/SynthSquare.png'
import Back from '../../img/stars.jpg'

const Plane = () => {

    const ref = useRef()
    const { camera, scene, clock } = useThree()
    const [ textures ] = useLoader(THREE.TextureLoader, [SynthSquare])
    const [ backtexture ] = useLoader(THREE.TextureLoader, [Back])
    const [ toggle, setToggle ] = useState(true)
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        camera.position.z = 3 - Math.cos( Math.sin(clock.elapsedTime) / 5 ) ;
        camera.position.x = 0 + -Math.sin( Math.cos(clock.elapsedTime) / 5 ) *1.5;
        camera.position.y = 1 + Math.cos( Math.sin(clock.elapsedTime) ) / 5 ;
                
        if (!toggle){
            if(ref.current.material.color.r < 0.015686274){
                ref.current.material.color.r = 0.01568627450980392  
                ref.current.material.color.g = 0.027450980392156862  
                ref.current.material.color.b = 0.5882352941176471
                
            }
            ref.current.material.color.r -= 0.0038344226579521  
            ref.current.material.color.g += 0.000152505446623093  
            ref.current.material.color.b += 0.0010893246187364 
             
        }
        else if(toggle){
            
            if(ref.current.material.color.r > 0.70588235294){
                ref.current.material.color.r = 0.7058823529411765 
                ref.current.material.color.g = 0  
                ref.current.material.color.b = 0.39215686274509803
                
            }
            ref.current.material.color.r += 0.0038344226579521   
            ref.current.material.color.g -= 0.000152505446623093  
            ref.current.material.color.b -= 0.0010893246187364  
        }      
    })

    useMountEffect(() => {

        camera.position.z = 3
        camera.position.x = 0
        camera.position.y = 2
        textures.wrapS = THREE.RepeatWrapping;
        textures.wrapT = THREE.RepeatWrapping;
        textures.repeat.set( 25, 25 )
        ref.current.material.map.needsUpdate = true
        scene.background = backtexture
        scene.fog = new THREE.FogExp2('rgb(207, 52, 118)', 0.01)    
    })

    useEffect(() => {

        const tick = setInterval(() => {
            setToggle(!toggle)
        }, 5500)

        return () => {
            clearInterval(tick)
          }
    })
    

    return (

        <mesh
        ref={ref}
        position={[0, 0, -14]}
        rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
        >
          <planeGeometry attach="geometry" args={[45, 45, 10, 10]} />
          <meshLambertMaterial attach="material" color={'rgb(4,7,150)'} map={textures}/>
        </mesh>
    )
}

export default Plane
