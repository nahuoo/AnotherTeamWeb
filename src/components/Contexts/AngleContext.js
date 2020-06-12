import React, {createContext, useState } from 'react'

const AngleContext = createContext()
const { Provider, Consumer } = AngleContext

const AngleContextProvider = (props) => {

    const [ angulo, setAngulo ] = useState('Centro')

    const handleAngulo = (e) => {
        
        setAngulo(e.target.textContent)
    }

    return (
        <Provider value={{angulo, handleAngulo}}>
            {props.children}
        </Provider>
    )
}

export {AngleContextProvider, Consumer, AngleContext }
