import {
  IAvatarUploadState,
  AvatarUploadActionTypes,
  IAvatarUploadActions
} from './AvatarUploadTypes'

const INITIAL_STATE: IAvatarUploadState = {
  imageUrl: null
}

export const avatarUploadReducer = (
  state: IAvatarUploadState = INITIAL_STATE,
  actions: IAvatarUploadActions
): IAvatarUploadState => {
  switch (actions.type) {
    case AvatarUploadActionTypes.SET_FILE:
      return { ...state, imageUrl: actions.avatarUpload.imageUrl }

    default:
      return state
  }
}
