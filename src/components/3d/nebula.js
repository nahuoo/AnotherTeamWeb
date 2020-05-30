let starGeo = new THREE.Geometry();
for(let i=0;i<6000;i++) {
let star = new THREE.Vector3(
Math.random() * 600 ,
Math.random() * 600 ,
Math.random() * 600 
  );
star.velocity = 0;
star.acceleration = 0.02;
starGeo.vertices.push(star);
}
let sprite = new THREE.TextureLoader().load( ant );
let starMaterial = new THREE.PointsMaterial({
  color: 0xaaaaaa,
  size: 0.7,
  map: sprite
});
let stars = new THREE.Points(starGeo,starMaterial);
let scene
scene.add(stars);
