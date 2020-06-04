import { useEffect } from 'react';
import {  useThree } from 'react-three-fiber';
import * as THREE from 'three'

const OrbitControls = require('three-orbit-controls')(THREE);

const CameraController = () => {
    const { camera, gl } = useThree();
  
    useEffect(
      () => {
        
        const controls = new OrbitControls(camera, gl.domElement);
  
        controls.minDistance = 3;
        controls.maxDistance = 20;
  
  
        return () => {
          controls.dispose();
        };
      },
      [camera, gl]
    );
    return null;
  }

  export default CameraController