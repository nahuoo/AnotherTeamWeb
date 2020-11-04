import React, { useContext } from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from '../components/Contexts/AngleContext'
import Hologram from './Hologram'
import Nurien from '../img/nurien1.png'
import uno from '../img/uno1.png'

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
            <Hologram Width='600px' Height='380px' Name='Uno' Src={uno} />
          </MainWrapper>
        )
      }
    </>
  )
}

export default SectionBackground
