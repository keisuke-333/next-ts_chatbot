import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>チャットボット</title>
        <meta name="description" content="チャットボットアプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
