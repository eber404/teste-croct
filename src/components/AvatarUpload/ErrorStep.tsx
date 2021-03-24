import React from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import SVGComponent from '../SVGComponent'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import { IAvatarUpload } from '../../interfaces/IAvatarUpload'
import Avatar from '../Avatar'
import CloseButton from '../CloseButton'

const ErrorStep: React.FC<IAvatarUpload> = (props: IAvatarUpload) => {
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
            <SVGComponent src="/assets/icons/warn.svg" />
          </Avatar>
        </Box>
        <Box>
          <Text
            fontSize="16px"
            fontFamily="Inter"
            fontWeight="500"
            color="#C64D32"
            lineHeight="180%"
            mb="2px"
          >
            Sorry, the upload failed.
          </Text>
          <Text
            fontSize="16px"
            fontWeight="500"
            letterSpacing="-0.02em"
            lineHeight="180%"
            sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            onClick={() => props.setStep(AvatarUploadStepEnum.INITIAL)}
          >
            Try again
          </Text>
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

export default ErrorStep
