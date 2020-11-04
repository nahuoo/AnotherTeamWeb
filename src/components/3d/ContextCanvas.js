import React, { useContext } from 'react'
import { Canvas } from 'react-three-fiber'
import { AngleContext } from '../Contexts/AngleContext'

// Context Bridge to canvas tree

const ForwardCanvas = ({ children }) => {
  const { angle, handleAngle } = useContext(AngleContext)

  return (
    <Canvas concurrent>
      <AngleContext.Provider value={{ angle, handleAngle }}>
        {children}
      </AngleContext.Provider>
    </Canvas>
  )
}

export default ForwardCanvas
