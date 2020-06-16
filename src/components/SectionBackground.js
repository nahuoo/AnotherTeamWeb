import React from 'react'
import { MainWrapper } from '../assets/styled-components/StyledSection'
import { Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from '../components/Contexts/AngleContext'
import { useContext } from 'react'
import {TitleBar, Window, Buttons} from '../assets/styled-components/StyledSection'
import Nurien from '../img/nurien.png'
import uno from '../img/uno.png'

const SectionBackground = ({children}) => {

    const { handleAngulo } = useContext(AngleContext)
    
    return (
        <MainWrapper>
            <Burger onClick={handleAngulo}>
                <div class="on1"></div>
                <div class="on2"></div>
                <div class="on3"></div>
            </Burger>
            <Window width={'30%'} height={'40%'}>
                        <TitleBar>
                                Nurien.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={Nurien} alt="Nurien" />
                    </Window>
                    <Window width={'30%'} height={'40%'}>
                        <TitleBar>
                                Uno.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={uno} alt="Uno" />
                    </Window>
            <Window width={'30%'} height={'40%'}>
                        <TitleBar>
                                Nurien.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={Nurien} alt="Nurien" />
                    </Window>
                    <Window width={'30%'} height={'40%'}>
                        <TitleBar>
                                Uno.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={uno} alt="Uno" />
                    </Window>
            <Window width={'30%'} >
                        <TitleBar>
                                Nurien.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={Nurien} alt="Nurien" />
                    </Window>
                    <Window width={'30%'} height={'40%'}>
                        <TitleBar>
                                Uno.js
                                <div>
                                    <Buttons>_</Buttons>
                                    <Buttons onClick={handleAngulo}>X</Buttons>
                                </div>
                        </TitleBar>
                        <img src={uno} alt="Uno" />
                    </Window>
        </MainWrapper>
    )
}

export default SectionBackground
