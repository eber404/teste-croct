import React from 'react'
import Head from 'next/head'
import { Box } from 'rebass/styled-components'
import styled from 'styled-components'
import { IStyledProps } from '../interfaces/IStyledProps'
import AvatarUpload from '../components/AvatarUpload'

const Home: React.FC = (props: IStyledProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <SBox>
        <AvatarUpload />
      </SBox>
    </>
  )
}

const SBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export default Home
