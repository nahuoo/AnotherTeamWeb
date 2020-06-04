import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader} from 'react-three-fiber';
import tex from '../../img/3.jpg'


const Picos = () => {

    const [toggle, setToggle] = useState(true)
    const [text] = useLoader(THREE.TextureLoader, [tex])
    const planeGeo = useRef()
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        if (toggle){
            planeGeo.current.material.color.r += 0.00270588  
            planeGeo.current.material.color.g -= 0.002013073  
            planeGeo.current.material.color.b -= 0.00118954  

            if(planeGeo.current.material.color.r > 0.811764705){
                planeGeo.current.material.color.r = 0.8117647058823529  
                planeGeo.current.material.color.g = 0.20372156862745098  
                planeGeo.current.material.color.b = 0.4627450980392157
            }
        }
        else if(!toggle){
            planeGeo.current.material.color.r -= 0.00270588  
            planeGeo.current.material.color.g += 0.002013073  
            planeGeo.current.material.color.b += 0.00118954 
        }      
    })

    useMountEffect(() => {
        planeGeo.current.rotateX(- Math.PI / 2)              // rotamos la cuadrilla para que este acostada
        let vertices = planeGeo.current.geometry.vertices          // extraemos los vertices de la cuadrilla
        for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
            if (5.5 < vertices[i].x || vertices[i].x < -5.5){ 
                vertices[i].z = ( Math.random() > 0.8 ) ? Math.random() * 9 : 0 
            }
            else {
                if(vertices[i].y > 15){
                    vertices[i].z = ( Math.random() > 0.8 ) ? Math.random() * 4 : 0
                    }
            }   
        }
        planeGeo.current.position.y = -0.02

        text.wrapS = THREE.RepeatWrapping;
        text.wrapT = THREE.RepeatWrapping;
        text.repeat.set( 30, 30 )
    })

    useEffect(() => {

        
        setInterval(() => {
            setToggle(!toggle)
        }, 5000)
    }, )
    return (
        <mesh
        
        ref={planeGeo}
        position={[0, 0, 1]}
        >
          <planeGeometry attach="geometry" args={[75, 75, 45, 25]} />
          <meshLambertMaterial attach="material" color={'rgb(0,206,209)'} map={text}/>
        </mesh>
    )
}

export default Picos
