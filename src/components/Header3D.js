import React, { Suspense } from 'react';
import { MainWrapper } from '../styled-components/styled-3d';
import { Canvas } from 'react-three-fiber';
import Plane from './3d/Plane'
import Peeks from './3d/Peeks'
import Logo from './3d/Logo';
import Sun from './3d/Sun';
import CameraController from './OrbitControls'
import Peeks2 from './3d/Peeks2';
import { Effect } from './3d/Bloom'

function Header3D() {
  
  return (
    <MainWrapper>
      <Canvas>
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Logo />
          <Sun />
          <Peeks smooth={9}/>
          <Peeks2 />
          <Plane />
          <Effect />
        </Suspense>
      </Canvas>
    </MainWrapper>
  );
}

export default Header3D;
