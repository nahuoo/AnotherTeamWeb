import React, {createContext, useState } from 'react'

const AngleContext = createContext()
const { Provider, Consumer } = AngleContext

const AngleContextProvider = (props) => {
  const [ angle, setAngle ] = useState('Nosotros')

  const handleAngle = (e) => {
    if (e.target.textContent === '') setAngle('Nosotros')
    setAngle(e.target.textContent)
  }

  return (
    <Provider value={{angle, handleAngle}}>
      {props.children}
    </Provider>
  )
}

export {AngleContextProvider, Consumer, AngleContext }
