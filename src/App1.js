import React, {useState, useEffect, useRef, Suspense} from 'react';
import * as THREE from "three";
import { MainWrapper } from './styled-components/styled-3d';
import { Canvas, useFrame, useLoader, useThree } from 'react-three-fiber';
import Plano from './components/3d/plano'
import Picos from './components/3d/Picos'
import Box from './components/cubo3d';
import Sole from './components/3d/Alakazam';

const OrbitControls = require('three-orbit-controls')(THREE);



const CameraController = () => {
  const { camera, gl, scene } = useThree();

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
};
function App1() {

  return (
    <MainWrapper>

      <Canvas>
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Box />
        <Sole />
        <Plano />
        <Picos />
      </Suspense>
      </Canvas>
    </MainWrapper>
  );
}

export default App1;
