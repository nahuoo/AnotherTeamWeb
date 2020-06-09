import React,{useContext} from 'react'
import { Canvas } from 'react-three-fiber';
import {AngleContext} from './AngleContext'

// Context Bridge to canvas tree

const ForwardCanvas = ({ children }) => {

    const { angulo, handleAngulo } = useContext(AngleContext)

    return (
      <Canvas>
        <AngleContext.Provider value={{angulo, handleAngulo}}>
          {children}
        </AngleContext.Provider>
      </Canvas>
    )
  }

export default ForwardCanvas
