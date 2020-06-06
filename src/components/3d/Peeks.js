import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { useFrame, useLoader} from 'react-three-fiber';
import Perlin from '../../utils/perlin-noise'
import Hex from '../../img/SynthSquare.png'


const Peeks = (props) => {

    const [toggle, setToggle] = useState(true)
    const [text] = useLoader(THREE.TextureLoader, [Hex])
    const planeGeo = useRef()
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        if (toggle){
            if(planeGeo.current.material.color.r < 0.015686274){
                planeGeo.current.material.color.r = 0.01568627450980392  
                planeGeo.current.material.color.g = 0.027450980392156862  
                planeGeo.current.material.color.b = 0.5882352941176471
                
            }
            planeGeo.current.material.color.r -= 0.0038344226579521  
            planeGeo.current.material.color.g += 0.000152505446623093  
            planeGeo.current.material.color.b += 0.0010893246187364 
             
        }
        else if(!toggle){
            
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

        /* let vertices = planeGeo.current.geometry.vertices          // extraemos los vertices de la cuadrilla
        for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
            if (5.5 < vertices[i].x || vertices[i].x < -5.5){ 
                vertices[i].z = ( Math.random() > 0.6 ) ? Math.random() * 9 : 0 
            }
            else {
                if(vertices[i].y > 15){
                    vertices[i].z = ( Math.random() > 0.6 ) ? Math.random() * 4 : 0
                    }
            }   
        } */
        let perlin = new Perlin();
        let peak = 20;
        let smoothing = props.smooth;
        let vertices = planeGeo.current.geometry.attributes.position.array;
        for (let i = 0; i <= vertices.length; i += 3) {
            if(vertices[i+1] > 0){  // estas atras del logo?
                if(-8 > vertices[i] || vertices[i] > 8 ){  // estas fuera del medio?
                    if (-18 > vertices[i] || vertices[i] > 18){
                        vertices[i+2] = peak * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)
                    }
                    else{
                        vertices[i+2] = (peak - 2) * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)
                    }
                }
                else {
                    vertices[i+2] = (peak - 7) * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)
                }                   
            }
            /* else if(-4 > vertices[i] || vertices[i] > 4 ){ // adelante del logo fuera de mid
                if(vertices[i+1] > -12){
                    if(vertices[i] < -13 || vertices[i] > 13){
                        vertices[i+2] = 9 * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)
                    }
                    else{
                        vertices[i+2] = 0 * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)

                    }
                }
                else{
                    vertices[i+2] = 0 * perlin.noise(vertices[i]/smoothing, vertices[i+1]/smoothing)    
                }
               } */
        
        }

        /* planeGeo.current.attributes.position.needsUpdate = true;
        planeGeo.current.computeVertexNormals(); */
        console.log(planeGeo.current.material.color)

        text.wrapS = THREE.RepeatWrapping;
        text.wrapT = THREE.RepeatWrapping;
        text.repeat.set( 100, 100 )
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
        position={[0, -0.2, -14]}
        rotation={new THREE.Euler(Math.PI / -2, 0, 0)}
        >
          <planeBufferGeometry attach="geometry" args={[55, 55, 250, 250]} />
          <meshLambertMaterial attach="material" color={'rgb(4,7,150)'} map={text}/>
        </mesh>
    )
}

export default Peeks
