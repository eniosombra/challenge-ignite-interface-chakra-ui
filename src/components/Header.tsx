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
        <Image src="/images/banner.svg" alt="TESTE" w="100%" />
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

      <Flex bg="gray.300" h="100%">
        <Box
          bgColor="gray.500"
          align="center"
          bgImage="url('/images/banner.svg')"
          bgRepeat="no-repeat"
          bgSize="100%"
          // bgSize="cover"
          w="100%"
          h="100%"
          p={['0', '0', '24']}
        >
          <Heading color="app.title" fontWeight="medium">
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
      </Flex>

      {/* <Text>TEXTO FORA DO BOX</Text> */}

      {/* <Flex
        bgImage="url('/images/background-header.svg')"
        bgSize="cover"
        bgRepeat="no-repeat"
        minH={['100', '255', '355']}
        align="center"
      >
        <Text>Título da imagem</Text>
      </Flex> */}
      {/* <Box
        bgColor="gray.500"
        // minH="335"
        // h="auto"
        align="center"
        bgImage="url('/images/background-header.svg')"
        bgRepeat="no-repeat"
        bgSize="100%"
      >
        <Text>Teste</Text>
      </Box>

      <Box
        bgImage="url('/images/background-header.svg')"
        bgRepeat="no-repeat"
        // bgSize="100%"
        minH="335"
        // align="center"
        // justify="center"
      >
        <Stack
          spacing="2"
          direction="column"
          align="center"
          justify="center"
          // h="100%"
          // w="100%"
        >
          <Heading color="app.title" fontWeight="medium">
            5 Continentes,
          </Heading>
          <Heading color="app.title" fontWeight="medium">
            infinitas possibilidades.
          </Heading>
          <Text>TESTE 123</Text>
          <Text>TESTE 123</Text>
          <Text>TESTE 123</Text>
          <Text>TESTE 123</Text>
        </Stack>
      </Box>
      <Image src="/images/background-header.svg" alt="TESTE 3" />
      <Flex>
        <img src="/images/background-header.svg" alt="TESTE 2" />
        <img src="/images/background-header.svg" alt="TESTE 1" />
      </Flex> */}
      {/* <Box>
        <Text pos="absolute" top="0" left="10">
          ABC TESTE
        </Text>
      </Box>

      <Image src="/images/background-header.svg" alt="TESTE" /> */}
    </>
  )
}
