import React, {useContext} from 'react'
import  { StyledNav, ListUL, ListLi, MenuLinks } from './StyledNavbar'
import {AngleContext} from './AngleContext'


const Navbar = () => {

    const { handleAngulo } = useContext(AngleContext)


    return (
    <StyledNav> 
        <ListUL>
            <ListLi>
            <div><MenuLinks Glitch={'Portfolio'} onClick={handleAngulo}>Portfolio</MenuLinks></div>
            </ListLi>
            <ListLi>
            <div><MenuLinks Glitch={'Nosotros'} onClick={handleAngulo}>Nosotros</MenuLinks></div>
            </ListLi>
            <ListLi>
            <div><MenuLinks Glitch={'Contacto'} onClick={handleAngulo}>Contacto</MenuLinks></div>
            </ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar