import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { MainWrapper } from './styled-components/styled-3d';
//import sol from './components/3d/sol'
import sol2 from './components/3d/sol2'
import mountains from './components/3d/mountains'
import { light, hemi } from './components/3d/lights'
import grilla from './components/3d/grilla'
const OrbitControls = require('three-orbit-controls')(THREE);


function App() {

  const wrapperBody = useRef()

  useEffect(() => {


    //Crear escena

    let scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000, 0)
    scene.fog = new THREE.FogExp2(0xf43a90, 0,9)
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
    //scene.add(sol)
    scene.add(sol2)
    sol2.position.z -= 500
  
    // Plano
    scene.add(mountains)
    // Piso cuadriculado
    
    const grid = new THREE.GridHelper( 1000, 40, 0xf43a90, 0xf43a90)
    scene.add(grid)
    grid.position.y += 200
    grid.position.z -= 200
    grid.rotateX(- Math.PI / 60)
    
    //Grilla
    scene.add(grilla)
    const animate = () => {
      requestAnimationFrame(animate)
     // sol.rotateY(0.01)
      
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
