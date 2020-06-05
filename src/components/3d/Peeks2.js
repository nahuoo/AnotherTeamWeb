import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader} from 'react-three-fiber';
import Hex from '../../img/SynthSquare.png'


const Peeks2 = () => {

    const [toggle, setToggle] = useState(true)
    const [text] = useLoader(THREE.TextureLoader, [Hex])
    const planeGeo = useRef()
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        if (!toggle){
            if(planeGeo.current.material.color.r < 0.015686274){
                planeGeo.current.material.color.r = 0.01568627450980392  
                planeGeo.current.material.color.g = 0.027450980392156862  
                planeGeo.current.material.color.b = 0.5882352941176471
                
            }
            planeGeo.current.material.color.r -= 0.0038344226579521  
            planeGeo.current.material.color.g += 0.000152505446623093  
            planeGeo.current.material.color.b += 0.0010893246187364 
             
        }
        else if(toggle){
            
            if(planeGeo.current.material.color.r > 0.70588235294){
                planeGeo.current.material.color.r = 0.7058823529411765 
                planeGeo.current.material.color.g = 0  
                planeGeo.current.material.color.b = 0.39215686274509803
                
            }
            planeGeo.current.material.color.r += 0.0038344226579521   
            planeGeo.current.material.color.g -= 0.000152505446623093  
            planeGeo.current.material.color.b -= 0.0010893246187364  
        }   
    })

    useMountEffect(() => {

        let vertices = planeGeo.current.geometry.vertices          // extraemos los vertices de la cuadrilla
        for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
            if (4 < vertices[i].x || vertices[i].x < -4){ 
                if(vertices[i].y < 4 && vertices[i].y > -5){
                vertices[i].z = ( Math.random() > 0.1 ) ? Math.random() * 7 : 0 
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
          <planeGeometry attach="geometry" args={[55, 55, 40, 25]} />
          <meshLambertMaterial attach="material" color={'rgb(4,7,150)'} map={text}/>
        </mesh>
    )
}

export default Peeks2