import React from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from '../components/Contexts/AngleContext'
import { useContext } from 'react'
import {Hologram, WrapperHologram} from '../assets/styled-components/StyledSection'
import Nurien from '../img/nurien1.png'
import uno from '../img/uno1.png'

const SectionBackground = ({children}) => {

    const { handleAngulo } = useContext(AngleContext)
    
    return (
        <MainWrapper>
            <Burger onClick={handleAngulo}>
                <div className="on1"></div>
                <div className="on2"></div>
                <div className="on3"></div>
            </Burger>
            <WrapperHologram height={'380px'} width={'600px'} name={'Nurien'}>
                <Hologram>
                    <img src={Nurien} alt="Nurien" />
                </Hologram>
            </WrapperHologram>
            <WrapperHologram height={'380px'} width={'600px'} name={'Uno'}>
                <Hologram>
                    <img src={uno} alt="uno" />
                </Hologram>
            </WrapperHologram>
        </MainWrapper>
    )
}

export default SectionBackground
