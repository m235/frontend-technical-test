import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import AuthProvider from '@/contexts/auth'
import { queryClient } from '@/services/client'
import theme from '@/themes'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
