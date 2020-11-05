import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'
import Hex from '../../assets/img/SynthSquare.png'

const Peeks2 = () => {
  const [toggle, setToggle] = useState(true)
  const [text] = useLoader(THREE.TextureLoader, [Hex])
  const planeGeo = useRef()
  const useMountEffect = (fun) => useEffect(fun, [])

  useFrame(() => {
    if (!toggle) {
      if (planeGeo.current.material.color.r < 0.015686274) {
        planeGeo.current.material.color.r = 0.01568627450980392
        planeGeo.current.material.color.g = 0.027450980392156862
        planeGeo.current.material.color.b = 0.5882352941176471
      }
      planeGeo.current.material.color.r -= 0.0038344226579521
      planeGeo.current.material.color.g += 0.000152505446623093
      planeGeo.current.material.color.b += 0.0010893246187364
    } else if (toggle) {
      if (planeGeo.current.material.color.r > 0.70588235294) {
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
    const vertices = planeGeo.current.geometry.vertices
    for (let i = 0; i < vertices.length; i++) {
      if (vertices[i].x > 3 || vertices[i].x < -3) {
        if (vertices[i].y < 4 && vertices[i].y > -6) {
          vertices[i].z = (Math.random() > 0.2) ? Math.random() * 7 : 0
        } else {
          if (vertices[i].x > 15 || vertices[i].x < -15) {
            if (vertices[i].y < -6) {
              vertices[i].z = (Math.random() > 0.4) ? Math.random() * 9 : 0
            }
          }
        }
      } else {
        if (vertices[i].y < 4 && vertices[i].y > -6) {
          vertices[i].z = (Math.random() > 0.2) ? Math.random() * 5 : 0
        }
      }
    }
    planeGeo.current.geometry.verticesNeedUpdate = true
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
      <planeGeometry attach='geometry' args={[75, 75, 34, 34]} />
      <meshLambertMaterial attach='material' color='rgb(4,7,150)' map={text} />
    </mesh>
  )
}

export default Peeks2
