import React, {useState, useEffect} from 'react';
import * as THREE from "three";
import { MainWrapper } from './styled-components/styled-3d';
const OrbitControls = require('three-orbit-controls')(THREE);


function App() {



  useEffect(() => {

    //Crear escena

    let scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    //Renderer

    let renderer = new THREE.WebGLRenderer({antialias: true, alpha: true })
    renderer.setPixelRatio( window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    //Canvas
    let wrapper = document.getElementById("wrapper")
    wrapper.appendChild(renderer.domElement)

    //Camara
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 0, 100)

    //Luces
    let light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 0, 0)
    scene.add(light)
    let hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
    hemi.position.set(0, 0, 5)
    scene.add(hemi)

    // Orbit control
    var controls = new OrbitControls(camera);
    camera.position.z = 500;
    controls.update();

    //Crear figura
    let cubeGeo = new THREE.IcosahedronGeometry(10, 1)  // Tipo de figura, y dimensiones
    cubeGeo.computeFlatVertexNormals()                  // con pocos triangulos hace smoth la figura
    let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xee0000}) // tipo material figura
    let cube = new THREE.Mesh(cubeGeo, cubeMaterial)  // armamos la figura con sus 2 propiedades
    /* cene.add(cube) */  // montamos la figura en la escena

    // Plano

    const planeGeo = new THREE.PlaneGeometry(1000, 1000, 32, 32) // creamos la figura en forma de cuadrilla
    planeGeo.rotateX(- Math.PI / 2)              // rotamos la cuadrilla para que este acostada
    let vertices = planeGeo.vertices          // extraemos los vertices de la cuadrilla
    for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
      vertices[i].y = ( Math.random() > 0.8 ) ? Math.random() * 100 : 0 
    }
    planeGeo.faces.forEach( (value) => {      // algoritmo para detectar las montañas basandose en vertice elevado
      const i = planeGeo.vertices[ value.a ]  // para luego colorea
      const j = planeGeo.vertices[ value.b ]
      const k = planeGeo.vertices[ value.c ]

      const maximo = Math.max(i.y, j.y, k.y)

      if (maximo > 1 ) return value.color.set(0x29E5E8)
      value.color.set(0xf43a90)

    })
    planeGeo.colorsNeedUpdate = true

    const planeMaterial = new THREE.MeshLambertMaterial({vertexColors: THREE.VertexColors, wireframe: true})
    scene.add(new THREE.Mesh(planeGeo, planeMaterial))

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }
    animate()
  })

  return (
    <MainWrapper id="wrapper">

    </MainWrapper>
  );
}

export default App;
