import { Dispatch, SetStateAction } from 'react'
import { AvatarUploadStepEnum } from '../enums/AvatarUploadStepEnum'

export interface IAvatarUpload {
  setStep: Dispatch<SetStateAction<AvatarUploadStepEnum>>
}
