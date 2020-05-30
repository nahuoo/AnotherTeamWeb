import ant from '../../img/solardo.png'
import * as THREE from "three";
var texture = new THREE.TextureLoader().load( ant );
texture.minFilter = THREE.NearestFilter;
texture.magFilter = THREE.NearestFilter;
texture.anisotropy = 1;
texture.generateMipmaps = false;
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set( 50, 50 );
var geometry = new THREE.PlaneGeometry( 1500, 1500, 32 );
geometry.rotateX(- Math.PI / 2)
var material = new THREE.MeshBasicMaterial( {color: 0xffffff, map: texture, transparent: true} );
var grilla = new THREE.Mesh( geometry, material );
export default grilla