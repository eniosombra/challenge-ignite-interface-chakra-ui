import Link from 'next/link'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

import cities from '../assets/cities.json'
import { QuantityBox } from '../components/QuantityBox'
import { CityCard } from '../components/CityCard'
import React from 'react'

export default function Continent() {
  return (
    <Box align="center" h="100vh">
      <Flex maxW={1240} align="center" justify="space-between" p={3}>
        <Link href="/">
          <Box _hover={{ cursor: 'pointer' }}>
            <ChevronLeftIcon boxSize={8} />
          </Box>
        </Link>

        <Image src="/images/logo.svg" />
        <Text />
      </Flex>

      <Image src="/images/europe.png" w="100%" />

      <Grid maxW={1240} templateColumns="repeat(6, 1fr)" gap={3} p={3}>
        <GridItem colSpan={3}>
          <Text align="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </GridItem>
        <QuantityBox quantity={50} label="países" />
        <QuantityBox quantity={60} label="línguas" />
        <QuantityBox quantity={27} label="cidades +100" />
      </Grid>

      <Box maxW={1240} p={3}>
        <Heading my={6} align="left">
          Cidade +100
        </Heading>
        <Flex wrap="wrap" justify="space-between" align="center">
          {cities.map(city => (
            <CityCard
              key={city.name}
              country={city.country}
              city={city.name}
              image={city.image}
              country_flag={city.country_flag}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}
