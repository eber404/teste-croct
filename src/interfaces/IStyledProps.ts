import { PropsWithChildren } from 'react'
import { StyledProps } from 'styled-components'
import { ITheme } from '../styles/themes/ITheme'

export interface IStyledProps extends StyledProps<unknown> {
  theme: ITheme
  children?: PropsWithChildren<unknown>
}
