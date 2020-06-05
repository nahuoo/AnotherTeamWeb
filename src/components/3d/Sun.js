import React from 'react';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';
import Solito from '../../img/retrosun.png'



const Sun = () => {

    const [ sol ] = useLoader(TextureLoader, [Solito])

    return (
        <mesh
        position={[0, 10, -36]}
        >
          <planeGeometry attach="geometry" args={[55, 55, 10, 10]} />
          <meshLambertMaterial attach="material" map={sol} transparent fog={false}/>
        </mesh>
    )
}

export default Sun
