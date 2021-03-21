import React from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import SVGComponent from '../SVGComponent'
import { useDispatch } from 'react-redux'
import { setStep } from '../../store/AvatarUpload/AvatarUploadActions'
import { AvatarUploadStepEnum } from '../../enums/AvatarUploadStepEnum'
import Slider, { Range } from 'rc-slider'

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
            color="#677489"
            lineHeight="-0.02em"
          >
            Crop
          </Text>
          <SSlider defaultValue={33} />
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

const SSlider = styled(Slider)`
  width: 276px !important;
  height: 2px !important;
  border-radius: 1px !important;
  -webkit-appearance: none !important;

  .rc-slider-handle {
    background-color: #3f80ff !important;
    height: 12px !important;
    width: 12px !important;
    border: none;
  }

  .rc-slider-rail {
    background-color: #b9d1ff !important;
    height: 2px;
  }

  .rc-slider-track {
    background-color: #3f80ff !important;
    height: 2px;
  }
`

export default ErrorStep
