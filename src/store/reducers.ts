import { combineReducers } from 'redux'
import { themeReducer, ThemeState } from './theme/reducers'

export interface IReducers {
  theme: ThemeState
}

export const reducers = {
  theme: themeReducer
}

export default combineReducers(reducers)
