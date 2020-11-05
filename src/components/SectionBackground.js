import React, { useContext } from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from '../components/Contexts/AngleContext'
import Hologram from './Hologram'
import Nurien from '../assets/img/nurien1.png'
import Uno from '../assets/img/uno1.png'
import Lorem from '../assets/img/lorem.jpg'

const SectionBackground = () => {
  const { angle, handleAngle } = useContext(AngleContext)

  return (
    <>
      {
        angle === 'Portfolio' && (
          <MainWrapper>
            <Burger onClick={handleAngle} modal='modal'>
              <div className='on1' />
              <div className='on2' />
              <div className='on3' />
            </Burger>
            <Hologram Width='600px' Height='380px' Name='Nurien' Src={Nurien} />
            <Hologram Width='600px' Height='380px' Name='Uno' Src={Uno} />
            <Hologram Width='600px' Height='380px' Name='Lorem' Src={Lorem} />
          </MainWrapper>
        )
      }
    </>
  )
}

export default SectionBackground
