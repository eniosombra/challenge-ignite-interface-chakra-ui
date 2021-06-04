import { GetServerSideProps } from 'next'
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

import { QuantityBox } from '../../components/QuantityBox'
import { CityCard } from '../../components/CityCard'
import React from 'react'
import { api } from '../../services/api'

type City = {
  name: string
  country: string
  image: string
  country_flag: string
  continent_id: string
}

type Continent = {
  id: string
  name: string
  description: string
  image: string
}

type CitiesProps = {
  cities: City[]
  continent: Continent
}

export default function Cities({ cities, continent }: CitiesProps) {
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

      <Image src={continent.image} w="100%" />

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

export const getServerSideProps: GetServerSideProps = async request => {
  const { id } = request.query
  const { data: city_data } = await api.get(`/cities/${id}`)
  const { data: continents_data } = await api.get(`/continents/${id}`)

  console.log(continents_data)
  return {
    props: {
      cities: city_data,
      continent: continents_data[0] ?? []
    }
  }
}
