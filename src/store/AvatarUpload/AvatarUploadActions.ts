import {
  IAvatarUploadState,
  AvatarUploadActionTypes,
  IAvatarUploadActions
} from './AvatarUploadTypes'

export const setAvatar = (
  avatarUpload: IAvatarUploadState
): IAvatarUploadActions => {
  return {
    type: AvatarUploadActionTypes.SET_FILE,
    avatarUpload
  }
}
