import * as THREE from 'three'

const planeGeo = new THREE.PlaneGeometry(1000, 300, 32, 10) // creamos la figura en forma de cuadrilla
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

  if (maximo > 1 ) return value.color.set(0x29E5E8)
  value.color.set(0x000000)

})
planeGeo.colorsNeedUpdate = true

const planeMaterial = new THREE.MeshLambertMaterial({vertexColors: THREE.VertexColors, wireframe: true, transparent: true})
const mountains = new THREE.Mesh(planeGeo, planeMaterial)
mountains.position.z -= 260
mountains.position.y -= 1

export default mountains