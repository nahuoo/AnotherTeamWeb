import React from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from '../components/Contexts/AngleContext'
import { useContext } from 'react'

const SectionBackground = ({children}) => {

    const { handleAngulo } = useContext(AngleContext)
    
    return (
        <MainWrapper>
            <Burger modal onClick={handleAngulo}>
                <div class="on1"></div>
                <div class="on2"></div>
                <div class="on3"></div>
            </Burger>
            {children}
        </MainWrapper>
    )
}

export default SectionBackground
