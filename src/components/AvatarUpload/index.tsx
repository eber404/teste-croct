import React from 'react'
import { useSelector } from 'react-redux'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import { IReducers } from '../../store/reducers'
import InitialStep from './InitialStep'
import ErrorStep from './ErrorStep'

const AvatarUpload: React.FC = () => {
  const { avatarUpload } = useSelector((state: IReducers) => state)

  const stepHandler = (step: AvatarUploadStepEnum) => {
    switch (step) {
      case AvatarUploadStepEnum.INITIAL: {
        return <InitialStep />
      }

      case AvatarUploadStepEnum.ERROR: {
        return <ErrorStep />
      }

      default: {
        return <InitialStep />
      }
    }
  }

  return stepHandler(avatarUpload.step)
}

export default AvatarUpload
