import React, {useContext} from 'react'
import  { StyledNav, ListUL, ListLi, MenuLinks } from './StyledNavbar'
import {AngleContext} from './AngleContext'


const Navbar = () => {

    const { handleAngulo } = useContext(AngleContext)


    return (
    <StyledNav> 
        <ListUL>
            <ListLi>
            <div><MenuLinks Glitch={'Izquierda'} onClick={handleAngulo}>Izquierda</MenuLinks></div>
            </ListLi>
            <ListLi>
            <div><MenuLinks Glitch={'Centro'} onClick={handleAngulo}>Centro</MenuLinks></div>
            </ListLi>
            <ListLi>
            <div><MenuLinks Glitch={'Derecha'} onClick={handleAngulo}>Derecha</MenuLinks></div>
            </ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar