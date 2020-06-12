import { useEffect, useContext} from 'react';
import * as THREE from "three";
import { useFrame, useLoader, useThree } from 'react-three-fiber';
import Back from '../../img/wallstar.jpg'
import {AngleContext} from '../AngleContext'

const SceneCamera = () => {

    const { camera, scene, clock, gl } = useThree()
    const [ backtexture ] = useLoader(THREE.TextureLoader, [Back])
    const { angulo } = useContext(AngleContext)
    const useMountEffect = (fun) => useEffect(fun, [])

    useFrame(() => {

        camera.position.z = 4 - Math.cos( Math.sin(clock.elapsedTime) / 5 ) ;
        camera.position.x = 0 + -Math.sin( Math.cos(clock.elapsedTime) / 5 ) *1.5;
        camera.position.y = 2 + Math.cos( Math.sin(clock.elapsedTime) ) / 5 ;

        switch (angulo) {
            case 'Izquierda':
                if(camera.rotation.y < 1.1){
                    if(camera.rotation.y >= 0 && camera.rotation.y < 1.1){
                        camera.rotation.y += 0.018333333
                    }
                    else{
                        camera.rotation.y += 0.0366
                    }
                }
            break;
            case 'Derecha':
                if (camera.rotation.y > -1.1){
                    if(camera.rotation.y <= 0 && camera.rotation.y > -1.1){
                        camera.rotation.y -= 0.018333333
                    }
                    else{
                        camera.rotation.y -= 0.0366
                    }      
                }
            break;    
            default:
                    if(camera.rotation.y >= -1.12 && camera.rotation.y < -0.01){
                        camera.rotation.y += 0.018333333
                    }
                    else if(camera.rotation.y <= 1.12 && camera.rotation.y > 0.01){
                        camera.rotation.y -= 0.018333333
                    }
                    else{
                        camera.rotation.y = 0
                    }
            break;
        }
    })

    useMountEffect(() => {
        backtexture.anisotropy = gl.capabilities.getMaxAnisotropy()
        scene.fog = new THREE.FogExp2(0xFFB468, 0.007)    
        scene.background = backtexture
    })

    return null
}

export default SceneCamera
