import img from '../../img/antt.png'
import * as THREE from "three";

var texture = new THREE.TextureLoader().load( img );
var sol2 = new THREE.PlaneGeometry( 150, 150, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, map: texture, transparent: true} );
var sol2 = new THREE.Mesh( sol2, material );
export default sol2