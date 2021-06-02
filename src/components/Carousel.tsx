import { Box, Flex, Divider, Text, Heading } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination, EffectCube])

export function Carousel() {
  const continents = [
    {
      title: 'Europa',
      description: 'O continente mais antigo.',
      image: 'europe.png'
    },
    {
      title: 'América do Norte',
      description: 'É o segundo maior continente do mundo.',
      image: 'north-america.png'
    },
    {
      title: 'América do Sul',
      description: 'Possui a maior biodiversidade do mundo.',
      image: 'europa.png'
    },
    {
      title: 'Ásia',
      description: 'Continente do mundo de maior território.',
      image: 'europa.png'
    },
    {
      title: 'África',
      description: 'A fauna é riquíssima e possui os maiores animais da terra.',
      image: 'africa.png'
    },
    {
      title: 'Oceania',
      description: ' É conhecida como o "Novíssimo Mundo"',
      image: 'europa.png'
    }
  ]

  return (
    <Box align="center">
      <Divider height={1} width={90} bg="app.heading" m="14" />
      <Text fontSize={36}>Vamos nessa?</Text>
      <Text fontSize={36}>Então escolha seu continente</Text>

      <Swiper
        navigation={true}
        pagination={true}
        effect={'cube'}
        grabCursor={true}
      >
        {continents.map(continent => (
          <SwiperSlide key={continent.title}>
            <Flex
              bgImage={`/images/${continent.image}`}
              h={450}
              align="center"
              justify="center"
              direction="column"
            >
              <Heading color="app.title" mb={4}>
                {continent.title}
              </Heading>
              <Text color="app.info" fontSize="lg">
                {continent.description}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
