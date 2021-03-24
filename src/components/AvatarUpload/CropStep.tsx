import React, { useState, useCallback } from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import SSlider from '../Slider'
import SaveButton from '../SaveButton'
import CloseButton from '../CloseButton'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import { useSelector, useDispatch } from 'react-redux'
import { IAvatarUpload } from '../../interfaces/IAvatarUpload'
import { IReducers } from '../../store/reducers'
import SVGComponent from '../SVGComponent'
import Avatar from '../Avatar'
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/saveImage'
import { setAvatar } from '../../store/AvatarUpload/AvatarUploadActions'

const CropStep: React.FC<IAvatarUpload> = (props: IAvatarUpload) => {
  const { avatarUpload } = useSelector((state: IReducers) => state)
  const dispatch = useDispatch()

  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const saveImageHandler = useCallback(async () => {
    try {
      const croppedImage: string = await getCroppedImg(
        avatarUpload.imageUrl,
        croppedAreaPixels
      )

      dispatch(setAvatar({ imageUrl: croppedImage }))

      props.setStep(AvatarUploadStepEnum.SUCCESS)
    } catch (e) {
      props.setStep(AvatarUploadStepEnum.ERROR)
    }
  }, [croppedAreaPixels])
  return (
    <SFlex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SBox>
        <Box display="flex" mr="32px">
          <Avatar>
            {!avatarUpload.imageUrl ? (
              <SVGComponent src="/assets/icons/warn.svg" />
            ) : (
              <SCropper
                image={avatarUpload.imageUrl}
                crop={crop}
                zoom={zoom}
                aspect={1 / 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                showGrid={false}
                cropShape="round"
                cropSize={{ width: 115, height: 115 }}
              />
            )}
          </Avatar>
        </Box>
        <Box>
          <Text
            fontSize="16px"
            fontFamily="Inter"
            fontWeight="400"
            color="#677489"
            lineHeight="-0.02em"
            mb="13px"
          >
            Crop
          </Text>
          <SSlider
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={value => setZoom(value)}
          />
          <SaveButton onClick={saveImageHandler}>Save</SaveButton>
        </Box>
        <CloseButton
          ml="auto"
          mt="-90px"
          callback={() => props.setStep(AvatarUploadStepEnum.INITIAL)}
        />
      </SBox>
    </SFlex>
  )
}

const SFlex = styled(Flex)`
  background: #f2f5f8;
  border: none;
  border-radius: 8px;
  width: 100%;
  max-width: 553px;
  height: 177px;
`

const SBox = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 64px);
  height: 100%;
`

const SCropper = styled(Cropper)`
  .reactEasyCrop_CropArea {
    border: none !important;
  }
  .reactEasyCrop_Image {
    top: unset !important;
  }
`

export default CropStep
