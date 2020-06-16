import React, {useContext} from 'react'
import  { StyledNav, ListUL, ListLi, MenuLinks } from '../assets/styled-components/StyledNavbar'
import {AngleContext} from './Contexts/AngleContext'


const Navbar = () => {

    const { handleAngulo } = useContext(AngleContext)


    return (
    <StyledNav> 
        <ListUL>
            <ListLi>
            <MenuLinks onClick={handleAngulo}>Portfolio</MenuLinks>
            </ListLi>
            <ListLi>
            <MenuLinks onClick={handleAngulo}>Nosotros</MenuLinks>
            </ListLi>
            <ListLi>
            <MenuLinks onClick={handleAngulo}>Contacto</MenuLinks>
            </ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar