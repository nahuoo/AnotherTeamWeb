import React, {useState, useEffect, useRef, useContext} from 'react';
import * as THREE from "three";
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import SynthSquare from '../../img/SynthSquare.png'
import Back from '../../img/wallstar.jpg'
import {AngleContext} from '../AngleContext'


const Plane = () => {

    const ref = useRef()
    const { camera, scene, clock, gl } = useThree()
    const [ textures ] = useLoader(THREE.TextureLoader, [SynthSquare])
    const [ backtexture ] = useLoader(THREE.TextureLoader, [Back])
    const [ toggle, setToggle ] = useState(true)
    const [ cameraRotation, setCameraRotation ] = useState(false)
    const { angulo, handleAngulo } = useContext(AngleContext)
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        camera.position.z = 4 - Math.cos( Math.sin(clock.elapsedTime) / 5 ) ;
        camera.position.x = 0 + -Math.sin( Math.cos(clock.elapsedTime) / 5 ) *1.5;
        camera.position.y = 2 + Math.cos( Math.sin(clock.elapsedTime) ) / 5 ;

        switch (angulo) {
            case 'Izquierda':
                if(camera.rotation.y < 1.1){
                    if(camera.rotation.y >= 0 && camera.rotation.y < 1.1){
                        camera.rotation.y += 0.018333333
                        console.log('Izquierda if1')
                    }
                    else{
                        camera.rotation.y += 0.0366
                        console.log('Izquierda if2')
                    }
                }
            break;
            case 'Derecha':
                if (camera.rotation.y > -1.1){
                    if(camera.rotation.y <= 0 && camera.rotation.y > -1.1){
                        camera.rotation.y -= 0.018333333
                        console.log('Derecha if1')
                    }
                    else{
                        camera.rotation.y -= 0.0366
                        console.log('Derecha if2')
                    }      
                }
            break;    
            default:
                /* if(camera.rotation.y !== 0){
                    if(camera.rotation.y <= 1.1 && camera.rotation.y !== 0){
                        camera.rotation.y += 0.018333333
                        console.log('Centro if1')
                    }
                    else if(camera.rotation.y >= -1.1 && camera.rotation.y !== 0){
                        camera.rotation.y -= 0.018333333
                        console.log('Centro if2')
                    }
                } */
            break;
        }
        /* camera.rotation.y = Math.sin( Math.cos(clock.elapsedTime) / 5)  */
                
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
/* 
        camera.rotation.y = 1.1 */
        backtexture.anisotropy = gl.capabilities.getMaxAnisotropy()
        camera.position.z = 3
        camera.position.x = 0
        camera.position.y = 2
        textures.wrapS = THREE.RepeatWrapping;
        textures.wrapT = THREE.RepeatWrapping;
        textures.repeat.set( 25, 25 )
        ref.current.material.map.needsUpdate = true
        scene.background = backtexture
        scene.fog = new THREE.FogExp2(0xFFB468, 0.008)    
    })

    useEffect(() => {

        const tick = setInterval(() => {
            setToggle(!toggle)
        }, 5500)

        
        setTimeout(() => {
            setCameraRotation(false)
        }, 1000)

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
          <planeGeometry attach="geometry" args={[55, 55, 10, 10]} />
          <meshLambertMaterial attach="material" color={'rgb(4,7,150)'} map={textures}/>
        </mesh>
    )
}

export default Plane
