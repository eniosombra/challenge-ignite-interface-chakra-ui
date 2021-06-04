import { Box, Divider, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, EffectCube } from 'swiper/core'
SwiperCore.use([Navigation, Pagination, EffectCube])

import continents from '../assets/continents.json'
import { Banner } from './Banner'

export function Carousel() {
  return (
    <Box align="center" mx={4} my={12}>
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
            <SwiperSlide key={continent.id}>
              <Banner
                id={continent.id}
                name={continent.name}
                image={continent.image}
                description={continent.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}
