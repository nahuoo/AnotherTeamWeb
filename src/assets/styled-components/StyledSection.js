import styled, {keyframes} from 'styled-components'

const Open = keyframes`
0% {
    transform: scale(0) translateX(-100%);

}
100% {
    transform: scale(1) translateX(0);
}`

export const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    color: white;
    padding: 20vh 10vw;
`


export const Window = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    border: 2px solid black;
    padding: 3px;
    background: RGB(214, 211, 206);
    overflow: hidden;
    animation: ${Open} 2s ease-in-out;
    animation-fill-mode: forwards;
    margin-bottom: 30px;
`
export const TitleBar = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Smallpixel';
    font-size: 150%;
    background: #394dcd;
    margin-bottom: 3px;

    
`
export const Buttons = styled.button`
    border: 0.1px solid black;
    width: 28px;
    background: RGB(214, 211, 206);
    color: black;
    height: 28px;
`