import React, { useState } from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import { FileDrop } from 'react-file-drop'
import { validateFileType } from '../../utils/validateFileType'
import SVGComponent from '../SVGComponent'
import { useDispatch } from 'react-redux'
import { setStep } from '../../store/AvatarUpload/AvatarUploadActions'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'

const AvatarUpload: React.FC = () => {
  const dipstach = useDispatch()

  const [dropped, setDropped] = useState(false)
  const [file, setFile] = useState(null)

  const dropHandler = (e: unknown) => {
    const file = e[0]
    const fileType = file.type
    console.log('file', file)
    setDropped(true)

    const isTypeValid = validateFileType(fileType)

    if (isTypeValid) {
      // setFile(file)
    } else {
      dipstach(setStep({ step: AvatarUploadStepEnum.ERROR }))
    }
  }

  return (
    <SFlex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SFileDrop onDrop={e => dropHandler(e)}>
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
      </SFileDrop>
    </SFlex>
  )
}

const SFlex = styled(Flex)`
  background: #f2f5f8;
  border: 2px dashed #c7cdd3;
  border-radius: 8px;
  width: 100%;
  max-width: 553px;
  height: 177px;
`

const SFileDrop = styled(FileDrop)`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default AvatarUpload
