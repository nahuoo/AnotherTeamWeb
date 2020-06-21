import React from 'react'
import {HologramWindow, HologramWrapper} from '../assets/styled-components/StyledSection'

const Hologram = ({Width, Height, Name, Src}) => {

    return (
        <HologramWrapper height={Height} width={Width} name={Name}>
                <HologramWindow>
                    <img src={Src} alt="Website" />
                </HologramWindow>
            </HologramWrapper>
    )
}

export default Hologram
