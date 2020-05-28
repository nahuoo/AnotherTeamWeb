import React, {useState, useEffect, useRef} from 'react';
import * as THREE from "three";
import { MainWrapper } from './styled-components/styled-3d';
import ant from './img/ant.jpeg'
const OrbitControls = require('three-orbit-controls')(THREE);


function App() {

  const wrapperBody = useRef()

  useEffect(() => {

    //Crear escena

    let scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000, 0)

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
    let light = new THREE.DirectionalLight(0xffffff)
    light.position.set(0, 0, 0)
    scene.add(light)
    let hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1)
    hemi.position.set(0, 0, 5)
    scene.add(hemi)

    // Orbit control
    var controls = new OrbitControls(camera);
    camera.position.z = 500;
    controls.update();

    //Crear figura
    var texture = new THREE.TextureLoader().load( ant );
    let cubeGeo = new THREE.IcosahedronGeometry(150, 1)  // Tipo de figura, y dimensiones
    cubeGeo.computeFlatVertexNormals()                  // con pocos triangulos hace smoth la figura
    let cubeMaterial = new THREE.MeshLambertMaterial({map: texture}) // tipo material figura
    let cube = new THREE.Mesh(cubeGeo, cubeMaterial)  // armamos la figura con sus 2 propiedades
    cube.position.z -= 500
    cube.position.y += 50
    scene.add(cube)  // montamos la figura en la escena

    // Plano

    const planeGeo = new THREE.PlaneGeometry(1000, 300, 32, 10) // creamos la figura en forma de cuadrilla
    planeGeo.rotateX(- Math.PI / 2)              // rotamos la cuadrilla para que este acostada
    let vertices = planeGeo.vertices          // extraemos los vertices de la cuadrilla
    for( let i=0; i < vertices.length; i++){    // algoritmo para hacer randoms las montañas con los vertices
      if (70 < vertices[i].x || vertices[i].x < -70){ 
          vertices[i].y = ( Math.random() > 0.5 ) ? Math.random() * 150 : 0 
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

    const planeMaterial = new THREE.MeshLambertMaterial({vertexColors: THREE.VertexColors, wireframe: true})
    const geo = new THREE.Mesh(planeGeo, planeMaterial)
    geo.position.z -= 260
    geo.position.y -= 1
    scene.add(geo)

    const grid = new THREE.GridHelper( 1000, 40, 0xf43a90, 0xf43a90)

    scene.add(grid)

    const animate = () => {
      requestAnimationFrame(animate)
/*       var timer = Date.now() * 0.0005;
        
				camera.position.x = Math.sin( timer ) * 10; */
/* 				camera.position.z = Math.cos( timer ) * 30; */
      cube.rotateY(0.01)
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
