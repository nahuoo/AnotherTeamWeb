import React from 'react'
import './App.css'
import Header3D from './components/Header3D'
import Navbar from './components/Navbar'
import GlobalStyle from './assets/styled-components/GlobalStyles'
import SectionBackground from './components/SectionBackground'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header3D />
      <SectionBackground />
    </>
  )
}

export default App
