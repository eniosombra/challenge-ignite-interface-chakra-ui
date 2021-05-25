import {
  Heading,
  Avatar,
  Flex,
  Text,
  Image,
  Stack,
  Box,
  Center
} from '@chakra-ui/react'

export function Header() {
  return (
    <>
      <Box>
        <Image src="/images/banner.svg" alt="banner" w="100%" />
        <Box pos="absolute" top={['2', '4', '16']} left={['5', '12', '90']}>
          <Heading
            color="app.title"
            fontWeight="medium"
            fontSize={[15, 24, 36]}
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text mt={[0, 2, 4]} fontSize={[10, 10, 20]}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
      </Box>
    </>
  )
}
