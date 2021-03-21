import React from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import SVGComponent from '../SVGComponent'
import { useDispatch } from 'react-redux'
import { setStep } from '../../store/AvatarUpload/AvatarUploadActions'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'

const ErrorStep: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <SFlex
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <SBox>
        <Box display="flex">
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
            onClick={() =>
              dispatch(setStep({ step: AvatarUploadStepEnum.INITIAL }))
            }
          >
            Try again
          </Text>
        </Box>
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

const Avatar = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 113px;
  height: 113px;
  background: #c3cbd5;
  border-radius: 100%;
  margin-right: 32px;
`

export default ErrorStep
