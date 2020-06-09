import React, {useState, useContext} from 'react'
import  { StyledNav, Line, Logo, Burger, ListUL, ListLi, MenuLinks, SubMenu, SubMenuItem } from './StyledNavbar'
import LogoIMG from '../img/ant.png'
import {Link} from 'react-router-dom'
import {AngleContext} from './AngleContext'

const LinkStyle = {
textDecoration: 'none' 
}

const Navbar = (props) => {

    const { angulo, handleAngulo } = useContext(AngleContext)


    return (
    <StyledNav> 
        <Line color={'#0deefe60'} top={'20%'}/>
        <Line color={'#FC1EDF60'} top={'50%'}/>
        <Link to="/">
        <Logo>
            <img src={LogoIMG} alt='Logo'/>
        </Logo>
        </Link>
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