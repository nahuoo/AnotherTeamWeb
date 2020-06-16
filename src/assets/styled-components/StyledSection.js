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
    padding: 20vh 10vw;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`


export const Window = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    flex-direction: column;
    border: 2px solid var(--mainLightPink);
    padding: 3px;
    background: var(--mainDark);
    overflow: hidden;
    animation: ${Open} 2s ease-in-out;
    animation-fill-mode: forwards;
    margin-bottom: 30px;
    & img {
        border: 2px solid var(--mainLightPink);
    }
`
export const TitleBar = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Smallpixel';
    font-size: 150%;
    background: var(--mainDark);
    margin-bottom: 3px;
    color: var(--mainLightPink);
    border: 2px solid var(--mainLightPink);

    
`
export const Buttons = styled.button`
    border: 0.1px solid var(--mainLightPink);
    width: 28px;
    background: transparent;
    color: var(--mainLightPink);
    height: 28px;
    font-weight: bold;
`