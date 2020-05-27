/* useEffect(() => {

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
    light.position.set(0, 0, 1)
    scene.add(light)
    let hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
    hemi.position.set(0, 0, 5)
    scene.add(hemi)

    //Crear Cubo
    let cubeGeo = new THREE.BoxGeometry(10, 10, 10)
    let cubeMaterial = new THREE.MeshLambertMaterial({color: 0xee0000})
    let cube = new THREE.Mesh(cubeGeo, cubeMaterial)
    scene.add(cube)

    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    animate()
  }) */