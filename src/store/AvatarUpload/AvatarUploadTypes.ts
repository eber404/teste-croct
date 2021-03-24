export interface IAvatarUploadState {
  imageUrl?: string
}

export enum AvatarUploadActionTypes {
  SET_FILE = 'SET_FILE'
}

export interface IAvatarUploadActions {
  type: string
  avatarUpload: IAvatarUploadState
}
