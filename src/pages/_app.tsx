import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/effect-cube/effect-cube.min.css'

import { theme } from '../styles/theme'
import '../styles/custom-swipper.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
