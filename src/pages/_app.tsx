import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { useEffect, useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'

import AuthProvider from '@/contexts/auth'
import theme from '@/themes'
import { ReactQueryDevtools } from 'react-query/devtools'
import Layout from '@/components/layout'
import GlobalStyle from '@/styles/globals'
import NProgressStyle from '@/styles/nprogress'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      })
  )

  useEffect(() => {
    router.events.on('routeChangeStart', NProgress.start)
    router.events.on('routeChangeComplete', NProgress.done)
    router.events.on('routeChangeError', NProgress.done)

    return () => {
      router.events.off('routeChangeStart', NProgress.start)
      router.events.off('routeChangeComplete', NProgress.done)
      router.events.off('routeChangeError', NProgress.done)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Conversations test</title>
      </Head>
      <GlobalStyle />
      <NProgressStyle />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />}
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default MyApp
