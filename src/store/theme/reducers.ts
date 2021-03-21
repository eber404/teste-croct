import * as types from './types'
import { ThemeAction } from './actions'

export interface ThemeState {
  dark: boolean
}

const INITIAL_STATE: ThemeState = {
  dark: false
}

// COUNTER REDUCER
export const themeReducer = (
  state: ThemeState = INITIAL_STATE,
  actions: ThemeAction
): ThemeState => {
  switch (actions.type) {
    case types.TOGGLE:
      return { ...state, dark: !state.dark }
    default:
      return state
  }
}
