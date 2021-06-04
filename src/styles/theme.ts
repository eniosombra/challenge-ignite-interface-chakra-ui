import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    app: {
      title: '#F5F8FA',
      info: '#DADADA',
      heading: '#47585B',
      highlight: '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})
