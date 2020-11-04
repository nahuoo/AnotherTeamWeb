import React from 'react'
import { HologramWindow, HologramWrapper } from '../assets/styled-components/StyledSection'

const Hologram = ({ Width, Height, Name, Src, children }) => {
  return (
    <HologramWrapper height={Height} width={Width} name={Name}>
      <HologramWindow>
        {Src &&
          <img src={Src} alt={Name} />}
        {children}
      </HologramWindow>
    </HologramWrapper>
  )
}

export default Hologram
