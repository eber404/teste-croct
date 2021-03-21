import { Flex } from 'reflexbox/styled-components/'
import React from 'react'
import { IStyledProps } from '../interfaces/IStyledProps'

const Layout: React.FC<IStyledProps> = (props: IStyledProps) => {
  return (
    <Flex
      className="layout"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      {props.children}
    </Flex>
  )
}

export default Layout
