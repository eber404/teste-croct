import { combineReducers } from 'redux'
import { IAvatarUploadState } from './AvatarUpload/AvatarUploadTypes'
import { avatarUploadReducer } from './AvatarUpload/AvatarUploadReducers'

export interface IReducers {
  avatarUpload: IAvatarUploadState
}

export const reducers = {
  avatarUpload: avatarUploadReducer
}

export default combineReducers(reducers)
