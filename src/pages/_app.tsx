import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import AuthProvider from '@/contexts/auth'
import theme from '@/themes'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <AuthProvider>
              <Component {...pageProps} />
          </AuthProvider>
      </ThemeProvider>
  )
}

export default MyApp
