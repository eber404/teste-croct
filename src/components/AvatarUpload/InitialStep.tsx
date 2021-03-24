import React from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import { FileDrop } from 'react-file-drop'
import { validateFileType } from '../../utils/validateFileType'
import SVGComponent from '../SVGComponent'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import { IAvatarUpload } from '../../interfaces/IAvatarUpload'
import { useDispatch, useSelector } from 'react-redux'
import { setAvatar } from '../../store/AvatarUpload/AvatarUploadActions'
import { IReducers } from '../../store/reducers'
import Avatar from '../Avatar'

const AvatarUpload: React.FC<IAvatarUpload> = (props: IAvatarUpload) => {
  const { avatarUpload } = useSelector((state: IReducers) => state)

  const dispatch = useDispatch()
  const dropHandler = async (
    fileList: FileList,
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault()
    event.stopPropagation()

    const file = fileList[0]
    const fileType = file.type
    const isTypeValid = validateFileType(fileType)

    if (isTypeValid) {
      dispatch(setAvatar({ imageUrl: URL.createObjectURL(file) }))

      props.setStep(AvatarUploadStepEnum.CROP)
    } else {
      props.setStep(AvatarUploadStepEnum.ERROR)
    }
  }

  return (
    <SFileDrop onDrop={(files, event) => dropHandler(files, event)}>
      <SFlex
        display="flex"
        justifyContent={avatarUpload.imageUrl ? null : 'center'}
        alignItems={avatarUpload.imageUrl ? null : 'center'}
      >
        {!avatarUpload.imageUrl ? null : (
          <Box ml="31px" mr="50px" my="auto">
            <Avatar>
              <img src={avatarUpload.imageUrl} />
            </Avatar>
          </Box>
        )}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <SVGComponent
              src="/assets/icons/image.svg"
              color="#495567"
              mr="12px"
            />
            <Text
              fontSize="14px"
              fontFamily="Inter"
              fontWeight="500"
              color="#495567"
              lineHeight="25px"
            >
              Organization Logo
            </Text>
          </Box>

          <Text fontWeight="300" color="#677489" lineHeight="25px">
            Drop the image here or click the browse.
          </Text>
        </Box>
      </SFlex>
    </SFileDrop>
  )
}

const SFlex = styled(Flex)`
  background: #f2f5f8;
  border: 2px dashed #c7cdd3;
  border-radius: 8px;
  height: 100%;
  max-width: 553px;
  height: 177px;
`

const SFileDrop = styled(FileDrop)`
  width: 100%;
  max-width: 553px !important;
  height: 177px !important;
`

export default AvatarUpload
