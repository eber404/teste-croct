import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'

export interface IAvatarUploadState {
  step: AvatarUploadStepEnum
}

export enum AvatarUploadActionTypes {
  SET_STEP = 'SET_STEP'
}

export interface IAvatarUploadActions {
  type: string
  avatarUpload: IAvatarUploadState
}
