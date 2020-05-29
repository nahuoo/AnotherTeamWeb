import * as THREE from "three";

export let hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1)
hemi.position.set(0, 0, 5)

export let light = new THREE.DirectionalLight(0xffffff)
light.position.set(0, 0, 0)
