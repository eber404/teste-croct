import React from 'react'
import { Box, BoxProps } from 'reflexbox'
import styled from 'styled-components'
import SVGComponent from './SVGComponent'

export interface ICloseButton extends BoxProps {
  callback?: () => unknown
}

const CloseButton: React.FC<ICloseButton> = (props: ICloseButton) => {
  return (
    <SBox {...props} onClick={() => props.callback()}>
      <SVGComponent src="/assets/icons/close.svg" ml="auto" mb="auto" />
    </SBox>
  )
}

const SBox = styled(Box)`
  position: relative;
  cursor: pointer;
`

export default CloseButton
