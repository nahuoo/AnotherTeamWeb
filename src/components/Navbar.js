import React, {useContext} from 'react'
import  { StyledNav, Logo, ListUL, ListLi, MenuLinks } from './StyledNavbar'
import LogoIMG from '../img/ant.png'
import {Link} from 'react-router-dom'
import {AngleContext} from './AngleContext'


const Navbar = (props) => {

    const { handleAngulo } = useContext(AngleContext)


    return (
    <StyledNav> 
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