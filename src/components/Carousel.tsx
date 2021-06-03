import { Box, Flex, Divider, Text, Heading } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper/core'
SwiperCore.use([Navigation, Pagination, EffectCube])

import continents from '../assets/continents.json'

export function Carousel() {
  return (
    <Box align="center" mx={4} my={8}>
      <Divider height={1} width={90} bg="app.heading" m="14" />
      <Text fontSize={36}>Vamos nessa?</Text>
      <Text fontSize={36} mb={8}>
        Então escolha seu continente
      </Text>

      <Box maxW={1240}>
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
    </Box>
  )
}
