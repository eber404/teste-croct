import {
  IAvatarUploadState,
  AvatarUploadActionTypes,
  IAvatarUploadActions
} from './AvatarUploadTypes'

export const setStep = (
  avatarUpload: IAvatarUploadState
): IAvatarUploadActions => {
  return {
    type: AvatarUploadActionTypes.SET_STEP,
    avatarUpload
  }
}
