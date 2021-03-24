import React, { useState } from 'react'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import InitialStep from './InitialStep'
import ErrorStep from './ErrorStep'
import CropStep from './CropStep'

const AvatarUpload: React.FC = () => {
  const [step, setStep] = useState(AvatarUploadStepEnum.INITIAL)

  switch (step) {
    case AvatarUploadStepEnum.INITIAL: {
      return <InitialStep setStep={setStep} />
    }

    case AvatarUploadStepEnum.CROP: {
      return <CropStep setStep={setStep} />
    }

    case AvatarUploadStepEnum.SUCCESS: {
      return <InitialStep setStep={setStep} />
    }

    case AvatarUploadStepEnum.ERROR: {
      return <ErrorStep setStep={setStep} />
    }

    default: {
      return <InitialStep setStep={setStep} />
    }
  }
}

export default AvatarUpload
