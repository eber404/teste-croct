import React, { useState } from 'react'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import InitialStep from './InitialStep'
import ErrorStep from './ErrorStep'
import CropStep from './CropStep'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../store/AvatarUpload/AvatarUploadActions'

const AvatarUpload: React.FC = () => {
  const dispatch = useDispatch()
  const [step, setStep] = useState(AvatarUploadStepEnum.INITIAL)

  const resetSteps = () => {
    setStep(AvatarUploadStepEnum.INITIAL)
    dispatch(setAvatar({ imageUrl: null }))
  }

  switch (step) {
    case AvatarUploadStepEnum.INITIAL: {
      return <InitialStep setStep={setStep} resetSteps={resetSteps} />
    }

    case AvatarUploadStepEnum.CROP: {
      return <CropStep setStep={setStep} resetSteps={resetSteps} />
    }

    case AvatarUploadStepEnum.SUCCESS: {
      return <InitialStep setStep={setStep} resetSteps={resetSteps} />
    }

    case AvatarUploadStepEnum.ERROR: {
      return <ErrorStep setStep={setStep} resetSteps={resetSteps} />
    }

    default: {
      return <InitialStep setStep={setStep} resetSteps={resetSteps} />
    }
  }
}

export default AvatarUpload
