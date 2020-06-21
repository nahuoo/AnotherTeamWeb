import styled, {keyframes} from 'styled-components'

const Open = keyframes`
0% {
    transform: scaleY(0.003) scaleX(0.001);
}
50% {
    transform: scaleY(0.003) scaleX(1);
}
100% {
    transform: scaleY(1);
    opacity: 1;
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

export const HologramWrapper = styled.div`
    filter: drop-shadow(0px 0px 12px var(--mainPink));
    width: 100%;
    height: calc(width / 1,578947368);
    margin-bottom: 10%;
    animation: ${Open} 1s ease;
    transition: all 1s;
    &:before, &:after{
        position: absolute;
        content: "";
        display: block;
        background: var(--mainLightPink);
    }
    &:after{
        height: 3%;
        width: 30%;   
        left: 60%;
        clip-path: polygon(0 0, 100% 0%, 90% 100%, 10% 100%);
        bottom: -2.7%;
    }
    &:before{
        height: 8%;
        width: 30%;
        top: -7.8%;
        left: 4%;
        clip-path: polygon(18% 0, 82% 0%, 100% 100%, 0% 100%);
        color: rgba(0, 0, 0, 0.5);
        content: "${props => props.name}";
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 55%;
        font-family: '8Bit';
    }
    @media (min-width: 630px){
        &:before{
            font-size: 80%;
        }
    }
    @media (min-width: 1000px){
        width: ${props => props.width};
        height: ${props => props.height};
        &:before{
            font-size: 100%;
        }
    }
    `

export const HologramWindow = styled.div`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 6%, 4% 0, 43% 0, 48% 5%, 80% 5%, 85% 0, 96% 0, 100% 6%, 100% 25%, 96% 30%, 96% 50%, 100% 55%, 100% 94%, 96% 100%, 45% 100%, 40% 95%, 23% 95%, 18% 100%, 4% 100%, 0 94%);
    background: rgba(238, 4, 180, 0.4);
    border: 8px solid var(--mainLightPink);
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 95%;
        padding: 2%;
        border: 3px inset var(--mainLightPink);
        border-radius: 2%; 
        opacity: 0;
        animation: ${Open} 1s ease-in 0.9s forwards;
    }
    `