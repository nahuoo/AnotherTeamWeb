import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader} from 'react-three-fiber';
import Hex from '../../img/Hex.jpg'


const Picos = () => {

    const [toggle, setToggle] = useState(true)
    const [text] = useLoader(THREE.TextureLoader, [Hex])
    const planeGeo = useRef()
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        if (!toggle){
            if(planeGeo.current.material.color.r > 0.800764705){
                planeGeo.current.material.color.r = 0.8117647058823529  
                planeGeo.current.material.color.g = 0.20372156862745098  
                planeGeo.current.material.color.b = 0.4627450980392157
                
            }
            planeGeo.current.material.color.r += 0.00270588  
            planeGeo.current.material.color.g -= 0.002013073  
            planeGeo.current.material.color.b -= 0.00118954 
             
        }
        else if(toggle){
            
            if(planeGeo.current.material.color.r < 0.0001){
                planeGeo.current.material.color.r = 0 
                planeGeo.current.material.color.g = 0.807843137254902  
                planeGeo.current.material.color.b = 0.8196078431372549
                
            }
            planeGeo.current.material.color.r -= 0.00270588  
            planeGeo.current.material.color.g += 0.002013073  
            planeGeo.current.material.color.b += 0.00118954 
        }   
    })

    useMountEffect(() => {

        let vertices = planeGeo.current.geometry.vertices          // extraemos los vertices de la cuadrilla
        for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
            if (5.5 < vertices[i].x || vertices[i].x < -5.5){ 
                vertices[i].z = ( Math.random() > 0.6 ) ? Math.random() * 9 : 0 
            }
            else {
                if(vertices[i].y > 15){
                    vertices[i].z = ( Math.random() > 0.6 ) ? Math.random() * 4 : 0
                    }
            }   
        }
        text.wrapS = THREE.RepeatWrapping;
        text.wrapT = THREE.RepeatWrapping;
        text.repeat.set( 20, 20 )
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
        
        ref={planeGeo}
        position={[0, -0.02, -14]}
        rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
        >
          <planeGeometry attach="geometry" args={[55, 45, 25, 45]} />
          <meshLambertMaterial attach="material" color={'rgb(207,52,118)'} map={text}/>
        </mesh>
    )
}

export default Picos
