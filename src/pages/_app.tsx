import React from 'react'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { useStore } from '../store'

import GlobalStyle from '../styles/global'
import { theme } from '../styles/themes/index'
import Layout from '../layout'
import { ThemeProvider } from 'styled-components'

import 'cropperjs/dist/cropper.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
