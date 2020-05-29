
import * as THREE from "three";

let cubeGeo = new THREE.IcosahedronBufferGeometry(75, 1)  // Tipo de figura, y dimensiones
                // con pocos triangulos hace smoth la figura
let cubeMaterial = new THREE.LineBasicMaterial({color: 0xFFFFFF}) // tipo material figura
let sol = new THREE.Mesh(cubeGeo, cubeMaterial)  // armamos la figura con sus 2 propiedades
sol.position.z -= 500
/* sol.position.y += 50 */

export default sol