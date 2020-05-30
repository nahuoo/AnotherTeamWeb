import * as THREE from 'three'
import { Material } from 'three'
import { ThemeConsumer } from 'styled-components'
import texturamont from '../../img/solardo.jpg' //textura de la montaña


const planeGeo = new THREE.PlaneGeometry(1000, 300, 32, 12) // creamos la figura en forma de cuadrilla
planeGeo.rotateX(- Math.PI / 2)              // rotamos la cuadrilla para que este acostada
let vertices = planeGeo.vertices          // extraemos los vertices de la cuadrilla
for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
  if (70 < vertices[i].x || vertices[i].x < -70){ 
      vertices[i].y = ( Math.random() > 0.5 ) ? Math.random() * 150 : 0 
  }
  else {
    vertices[i].y = ( Math.random() > 0.5 ) ? Math.random() * 30 : 0
  }   

}
planeGeo.faces.forEach( (value) => {      // algoritmo para detectar las montañas basandose en vertice elevado
  const i = planeGeo.vertices[ value.a ]  // para luego colorea
  const j = planeGeo.vertices[ value.b ]
  const k = planeGeo.vertices[ value.c ]

  const maximo = Math.max(i.y, j.y, k.y)

  if (maximo > 1 ) return value.color.set(0x00ffee)
  value.color.set(0x00ffee)

})
planeGeo.colorsNeedUpdate = true

const texture = new THREE.TextureLoader().load( texturamont ); //poner textura a las montañas
const planeMaterial = new THREE.MeshLambertMaterial({vertexColors: THREE.VertexColors, wireframe: true, map: texture})
const mountains = new THREE.Mesh(planeGeo, planeMaterial)
mountains.position.z -= 260
mountains.position.y -= 1

export default mountains