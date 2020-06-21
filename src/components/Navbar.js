import React, {useContext, useState} from 'react'
import  { StyledNav, ListUL, ListLi, MenuLinks, Burger } from '../assets/styled-components/StyledNavbar'
import {AngleContext} from './Contexts/AngleContext'


const Navbar = () => {

    const [menu, setMenu] = useState(false)
    const { handleAngulo } = useContext(AngleContext)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
    <StyledNav>
        <Burger onClick={handleMenu}>
            <div className={menu ? 'on1' : ''}></div>
            <div className={menu ? 'on2' : ''}></div>
            <div className={menu ? 'on3' : ''}></div>
        </Burger>
        <ListUL active={menu}>
            <ListLi onClick={handleMenu}>
            <MenuLinks onClick={handleAngulo}>Portfolio</MenuLinks>
            </ListLi>
            <ListLi onClick={handleMenu}>
            <MenuLinks onClick={handleAngulo}>Nosotros</MenuLinks>
            </ListLi>
            <ListLi onClick={handleMenu}>
            <MenuLinks onClick={handleAngulo}>Contacto</MenuLinks>
            </ListLi>
        </ListUL>
    </StyledNav>
    )
}

export default Navbar