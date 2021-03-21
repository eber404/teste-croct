import {
  IAvatarUploadState,
  AvatarUploadActionTypes,
  IAvatarUploadActions
} from './AvatarUploadTypes'

const INITIAL_STATE: IAvatarUploadState = {
  step: 0
}

// COUNTER REDUCER
export const avatarUploadReducer = (
  state: IAvatarUploadState = INITIAL_STATE,
  actions: IAvatarUploadActions
): IAvatarUploadState => {
  switch (actions.type) {
    case AvatarUploadActionTypes.SET_STEP:
      return { ...state, step: actions.avatarUpload.step }
    default:
      return state
  }
}
