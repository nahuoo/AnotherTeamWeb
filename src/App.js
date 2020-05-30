import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { MainWrapper } from './styled-components/styled-3d';
import sol from './components/3d/sol'
import mountains from './components/3d/mountains'
import { light, hemi } from './components/3d/lights'
import space from './img/space.jpg'
import ant from './img/ant.jpeg'
const OrbitControls = require('three-orbit-controls')(THREE);


function App() {

  const wrapperBody = useRef()

  useEffect(() => {

    //Crear escena

    let scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)
    scene.fog = new THREE.FogExp2(0xf43a90, 0.001)

    //Renderer

    let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true })
    renderer.setPixelRatio( window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    //Canvas
    wrapperBody.current.appendChild(renderer.domElement)

    //Camara
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 30, 100)

    //Luces
    scene.add(light)
    scene.add(hemi)

    // Orbit control
    var controls = new OrbitControls(camera);
    camera.position.z = 500;
    controls.update();



    // Sol
    scene.add(sol)
    // Plano
    scene.add(mountains)
    // Piso cuadriculado
/*     const grid = new THREE.GridHelper( 1000, 40, 0xf43a90, 0xf43a90)
    scene.add(grid) */


/*     let texture = new THREE.TextureLoader().load(ant);
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.anisotropy = 1;
                texture.generateMipmaps = false; */


    const animate = () => {
      requestAnimationFrame(animate)
      starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
        
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true; 
      renderer.render(scene, camera)
    }

    animate()

  })

  return (
    <MainWrapper ref={wrapperBody}>

    </MainWrapper>
  );
}

export default App;
