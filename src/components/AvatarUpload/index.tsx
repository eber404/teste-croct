import React from 'react'
import { useSelector } from 'react-redux'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import { IReducers } from '../../store/reducers'
import InitialStep from './InitialStep'
import ErrorStep from './ErrorStep'
import CropStep from './CropStep'

const AvatarUpload: React.FC = () => {
  const { avatarUpload } = useSelector((state: IReducers) => state)

  const stepHandler = (step: AvatarUploadStepEnum) => {
    switch (step) {
      case AvatarUploadStepEnum.INITIAL: {
        return <CropStep />
      }

      case AvatarUploadStepEnum.ERROR: {
        return <ErrorStep />
      }

      case AvatarUploadStepEnum.CROP: {
        return <CropStep />
      }

      default: {
        return <InitialStep />
      }
    }
  }

  return stepHandler(avatarUpload.step)
}

export default AvatarUpload
