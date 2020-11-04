import React from 'react'
import { useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three'
import Solito from '../../img/Sun.png'

const Sun = () => {
  const [sol] = useLoader(TextureLoader, [Solito])

  return (
    <mesh
      position={[0, 15, -41.5]}
    >
      <circleGeometry attach='geometry' args={[15, 20]} />
      <meshBasicMaterial attach='material' map={sol} transparent fog={false} />
    </mesh>
  )
}

export default Sun
