import React from 'react'
import { Text } from 'rebass/styled-components'
import { Flex, Box } from 'reflexbox'
import styled from 'styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'
import SVGComponent from './SVGComponent'

const AvatarUpload: React.FC = (props: IStyledProps) => {
  return (
    <SFlex flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" alignItems="center">
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
export default AvatarUpload
