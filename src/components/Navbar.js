import React, { useContext, useState } from 'react'
import { StyledNav, ListUL, ListLi, MenuLinks, Burger } from '../assets/styled-components/StyledNavbar'
import { AngleContext } from './Contexts/AngleContext'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const { handleAngle } = useContext(AngleContext)

  const handleMenu = () => {
    setMenu(prevMenu => !prevMenu)
  }

  return (
    <StyledNav>
      <Burger onClick={handleMenu}>
        <div className={menu ? 'on1' : ''} />
        <div className={menu ? 'on2' : ''} />
        <div className={menu ? 'on3' : ''} />
      </Burger>
      <ListUL active={menu}>
        <ListLi onClick={handleMenu}>
          <MenuLinks onClick={handleAngle}>Portfolio</MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks onClick={handleAngle}>Nosotros</MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks onClick={handleAngle}>Contacto</MenuLinks>
        </ListLi>
      </ListUL>
    </StyledNav>
  )
}

export default Navbar
