import { Text } from '@chakra-ui/layout'

import { Header } from '../components/Header'
import { Menu } from '../components/Menu'

export default function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Text align="center" fontSize={36}>
        Vamos nessa?
      </Text>
      <Text align="center" fontSize={36}>
        Então escolha seu continente
      </Text>
    </>
  )
}
