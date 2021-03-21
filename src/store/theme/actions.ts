import * as types from './types'
import { ThemeState } from './reducers'

export interface ThemeAction {
  type: string
  theme: ThemeState
}

// TOGGLE THEME MODE
export const toggleTheme = (theme: ThemeState): ThemeAction => {
  return {
    type: types.TOGGLE,
    theme
  }
}
