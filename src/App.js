import React from 'react'
import Header3D from './components/Header3D'
import Navbar from './components/Navbar'
import GlobalStyle from './assets/styled-components/GlobalStyles'
import {AngleContextProvider} from './components/AngleContext'

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <AngleContextProvider>
                <Navbar />
                <Header3D />
            </AngleContextProvider>
        </div>
    )
}

export default App
