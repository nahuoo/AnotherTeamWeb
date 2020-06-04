import React, {useState, useEffect, useRef, Suspense} from 'react';
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber';
import { TextureLoader } from 'three';
import Solito from '../../img/solito.png'



const Sole = () => {

    const sola = useRef()
    const [ sol ] = useLoader(TextureLoader, [Solito])
    
    const useMountEffect = (fun) => useEffect(fun, [])

    useMountEffect(() => {
        sola.current.material.map.needsUpdate = true

    })
    return (
        <mesh
        ref={sola}
        position={[0, 3, -30]}
        
        >
          <planeGeometry attach="geometry" args={[50, 50, 10, 10]} />
          <meshLambertMaterial attach="material" map={sol} transparent fog={false}/>
        </mesh>
    )
}

export default Sole
