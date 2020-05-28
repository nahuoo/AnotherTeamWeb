import ant from '../../img/ant.jpeg'
import * as THREE from "three";

var texture = new THREE.TextureLoader().load( ant );
let cubeGeo = new THREE.IcosahedronGeometry(150, 1)  // Tipo de figura, y dimensiones
cubeGeo.computeFlatVertexNormals()                  // con pocos triangulos hace smoth la figura
let cubeMaterial = new THREE.MeshLambertMaterial({ map: texture}) // tipo material figura
let sol = new THREE.Mesh(cubeGeo, cubeMaterial)  // armamos la figura con sus 2 propiedades
sol.position.z -= 500
sol.position.y += 50

export default sol