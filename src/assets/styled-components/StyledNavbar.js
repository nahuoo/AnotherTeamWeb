import styled, { keyframes } from 'styled-components'

/* /////////////////////////////////////////////// */
/*                    ANIMACION                    */
/* /////////////////////////////////////////////// */
const nav_grow = keyframes`
0% {
        width: 0;
        left: 100%;
    }
    70% {
        width: 10px;
        left: 0;
    }
    100% {
        width: 100%;
        left: 0;
    }`
  
/* /////////////////////////////////////////////// */
/*                    GENERAL                      */
/* /////////////////////////////////////////////// */
export const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 9vw;
  padding: 3vw 0;
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  z-index: 1;
  background: transparent;
  font-size: 110%;
  font-family: 'Quantum';
  top:0px;
  z-index: 100;
  @media (min-width: 630px) {
    height: 4vw;
  }
  @media (min-width: 1000px) {
    width: 100%;
    height: 56px;
    position: fixed;
    justify-content: flex-end;
    padding: 0px;
  }
  `
/* /////////////////////////////////////////////// */
/*                    BURGER                       */
/* /////////////////////////////////////////////// */
export const Burger = styled.div`
  margin-left: 3%;
  position: ${props => props.modal && 'absolute'};
  top: ${props => props.modal && '3%'};
  z-index: ${props => props.modal && '115'};
  cursor: pointer;
  & div{
    width:30px;
    height:5px;
    background-color: white;
    margin:5px;
    border-radius: 20%;
    transition: all 0.3s ease-in-out;
    }
  & .on1{
    transform: translateY(10px) rotate(135deg);
  }
  & .on2{
    opacity: 0;
  }
  & .on3{
    transform: translateY(-10px) rotate(-135deg);
  }
  @media (min-width: 1000px) {
    display: ${props => props.modal ? "inline" : "none"};
    position: fixed;
    left: 2%;
  }`
/* /////////////////////////////////////////////// */
/*                    MENU                         */
/* /////////////////////////////////////////////// */
export const ListUL = styled.ul`
  display: flex;
  position: fixed;
  flex-direction: column;
  box-shadow: inset 14px -143px 200px -188px rgba(252,30,223,1);
  background: #000000B3;
  top: 15vw;
  padding: 5vw 3vw;
  transition: all 0.2s ease-in;
  user-select:none;
  opacity: ${(props) => props.active ? '100%' : '0%' };
  transform: ${(props) => props.active ? 'translateY(0%) translateX(0%) scale(1)' : 'translateY(-50%) translateX(0%) scale(0)'};

  @media (min-width: 630px) {
    top: 10vw;
    padding: 0vw 3vw;
  }
  @media (min-width: 1024px) {
    width: 50vw;
    height: 100%;
    opacity: 100%;
    transform: none;
    box-shadow: none;
    padding: 0;
    position: initial;
    flex-direction: row;
    justify-content: space-evenly;
    background: none;
  }
  `

export const ListLi = styled.li`
  width: 94vw;
  padding-bottom: 2vw;
  padding-top: 0;
  margin-top: 0;
  &:last-child{
    margin-bottom: 0;
    padding-bottom: 0;
    
  }
  @media (min-width: 630px) {
    display: ${props => props.subMenu ? 'none' : 'initial'};
  }
  @media (min-width: 1024px) {
    padding: 0 24px;
    height: 100%;
    width: initial; 
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
    cursor: pointer;

    &:hover {
	    transition: all 400ms;
      opacity: 1;
      color: var(--mainLightPink);
	    &:before, &:after {
        content: '';
	      display: block;
	      position: absolute;
	      bottom: 0;
	      left: 0;
	      width: 100%;
	      animation: ${nav_grow} 400ms forwards;    
      }
      &:before {
        height: 5px;
	      transform: translateY(2px);
	      background: var(--mainLightPink);
	      filter: blur(6px);
        z-index: 999;
      }
	    &:after {
		    height: 1px;
	      background: var(--mainLightPink);
	      filter: blur(0);
	      z-index: 998;
      }
      &>p {
        color: var(--mainLightPink);
      }
    }
  }
  `
 export const MenuLinks = styled.p`
  font-size: 1.6rem;
  color: var(--mainWhite);
  letter-spacing: 1pt;
  transition: all 400ms ease;

  @media (min-width: 630px) {
    display: ${props => props.subMenu ? 'none' : 'initial'};
  }
  @media (min-width: 1000px) {
    display: initial;
    text-align: center;
  }
  @media (min-width: 1550px) {
    font-size: 20px;
  }
  `

