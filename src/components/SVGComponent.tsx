import Svg, { Props as SvgProps } from 'react-inlinesvg'
import React from 'react'
import styled from 'styled-components'
import {
  color,
  layout,
  size,
  space,
  margin,
  position,
  ColorProps,
  LayoutProps,
  SizeProps,
  SpaceProps,
  MarginProps,
  PositionProps
} from 'styled-system'
import { Box } from 'rebass/styled-components'

type ISvgProps = ColorProps &
  LayoutProps &
  SizeProps &
  SpaceProps &
  MarginProps &
  PositionProps &
  SvgProps & {
    src: string
  }
const SVGComponent: React.FC<ISvgProps> = (props: ISvgProps) => {
  return (
    <StyledBox margin={props.margin}>
      <StyledBox>
        <StyledSvg {...props} />
      </StyledBox>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${margin};
`

const StyledSvg = styled(Svg)<SvgProps>`
  position: relative;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & path {
    fill: ${({ color }) => color};
  }

  & .a {
    opacity: 1;
    fill: ${({ color }) => color};
  }

  circle {
    fill: ${({ color }) => color};
  }

  transition: ${props => props.theme.transition.default};
  ${color};
  ${layout};
  ${size};
  ${space};
  ${margin};
  ${position};
`

export default SVGComponent
