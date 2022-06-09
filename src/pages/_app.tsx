import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { getLoggedUserId } from '@/utils/getLoggedUserId'
import theme from '@/themes'

import '../styles/globals.css'

// Default way to get a logged user
export const loggedUserId = getLoggedUserId()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
