import styled, { keyframes, css } from 'styled-components'

/* /////////////////////////////////////////////// */
/*                    ANIMACION                    */
/* /////////////////////////////////////////////// */
const glitch = keyframes`
0% {
		transform: translate(0);
    opacity: 0;
	}
	20% {
		transform: translate(-5px, 5px);
    opacity: 1;       
	}
	40% {
		transform: translate(-5px, -5px);
    opacity: 1;
	}
	60% {
		transform: translate(5px, 5px);
    opacity: 1;
	}
	80% {
		transform: translate(5px, -5px);
    opacity: 1;
	}
	to {
		transform: translate(0);
    opacity: 0;
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
    height: 0.3vw;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: flex-end;
  }
  `
/* /////////////////////////////////////////////// */
/*                   BACKGROUND                    */
/* /////////////////////////////////////////////// */
export const Line = styled.div`
  position: absolute;
  height:26%;
  width: 100%;
  z-index: -1;
  background: ${(props) => props.color || 'black'};
  top: ${(props) => props.top || '0'};

  @media (min-width: 1500px){
    height: 18%;
    top: ${(props => props.top === '20%' ? '30%' : '51%')}
  }
`
/* /////////////////////////////////////////////// */
/*                    LOGO                         */
/* /////////////////////////////////////////////// */
export const Logo = styled.div`
  position: absolute;
  height: 120%; 
  bottom: 15%;
  left: 30%;
  & img {
    max-width: 150%;
    max-height: 150%;
  }
  @media (min-width: 630px) {
    height: 12vw; 
    left: 37%;
  }
  @media (min-width: 1000px) {
    height: 4vw;
    left: 3%;
    top: 0;
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
    height: 1000%;
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
  text-align: center;
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
    padding: 0;
    height: 100%;
    width: initial; 
    position: relative;
    display: flex;
    text-align: center;
    align-items: center;
  }
  `
 export const MenuLinks = styled.p`
  padding-top: 0;
  margin-top: 0;
  text-decoration: none;
  font-size: 1.6rem;
  color: white;
  letter-spacing: 1pt;
  transition: all 0.2s ease 0s;
  cursor: pointer;
 

    &:before, &:after {
	    display: block;
	    content: '${(props) => props.Glitch}';
	    text-transform: uppercase;
	    position: relative;
	    height: 100%;
	    width: 100%;
	    opacity: .9;
      transition: all .9s cubic-bezier(.25, .46, .45, .94);

      opacity: 0;
      letter-spacing: 2pt;
	    }
    &:after {
	    color: #FC1EDF;
	    z-index: -1;
      top: -1.3rem;
	  }   
    &:before {
      top: 1.3rem;
	    color: #0deefe;
	    z-index: -2;
	  }
	  &:hover {
      opacity: 1;
      letter-spacing: 3pt;
	    &:before {
		    animation: ${glitch} .4s cubic-bezier(.25, .46, .45, .94) both 1;    
	    }
	    &:after {
		    animation: ${glitch} .4s cubic-bezier(.25, .46, .45, .94) reverse both 1;
	    }
    }
  @media (min-width: 630px) {
    display: ${props => props.subMenu ? 'none' : 'initial'};
  }
  @media (min-width: 1000px) {
    height: 100%;
    display: initial;
    text-align: center;
  }
  @media (min-width: 1550px) {
    font-size: 20px;
  }
  `
/* /////////////////////////////////////////////// */
/*                    SUBMENU                      */
/* /////////////////////////////////////////////// */
export const SubMenuItem = styled.li`
  text-align: center;
  padding: 1vw 0;
  font-size: 0.9rem;
  user-select:none;
  text-decoration: none;
  `
export const SubMenu = styled.ul`
  display: ${(props) => props.subMenu ? 'flex' : 'none'};
  flex-direction: column;
  position: relative;
  left: 0;
  top: 0;
  transition: all 0.1s ease-in;
  & > ${SubMenuItem} > a > ${MenuLinks}::before{
    animation: ${props => props.subMenu ? css`${glitch} .4s cubic-bezier(.25, .46, .45, .94) both 1` : ''};
  }
  & > ${SubMenuItem} > a > ${MenuLinks}::after{
    animation: ${props => props.subMenu ? css`${glitch} .4s cubic-bezier(.25, .46, .45, .94) reverse both 1` : ''};
  }
  @media (min-width: 630px) {
    padding-bottom: 0;
  }
  @media (min-width: 1000px) {
    position: absolute;
    width: 210px;
    top: 100%;
    left: -25%;
    /* box-shadow: inset 14px -143px 100px -188px rgba(252,30,223,1); */
    background: #000000B3;
    transition: all 0.5s ease-in;
    & > ${SubMenuItem} > a > ${MenuLinks}{
      position: initial;
      font-size: 0.9rem;
    }
    & > ${SubMenuItem} > a > ${MenuLinks}::after{
      z-index:initial;
    }
    & > ${SubMenuItem} > a > ${MenuLinks}::before{
      z-index:initial;
    }
  }
  `

