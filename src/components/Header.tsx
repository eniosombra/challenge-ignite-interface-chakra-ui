import { Heading, Flex, Text, Box, Image, Center } from '@chakra-ui/react'

export function Header() {
  return (
    <Box mb={[, 8, 16, 24]}>
      <Center>
        <Image src="/images/logo.svg" p={3} />
      </Center>

      <Flex
        bgImage={'images/banner.svg'}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        align="center"
        h={[, 160, 240, 320, 380, 460]}
      >
        <Flex
          mx={[, 4, 8, 16, 32]}
          align="center"
          justify="space-between"
          w="100%"
        >
          <Box>
            <Heading
              color="app.title"
              fontWeight="normal"
              fontSize={[, 24, 32, 36]}
              mb={4}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>

            <Text color="app.info" fontSize={[, 12, 16, 20]} mb={4}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image
            src="/images/airplane.svg"
            alt="airplane"
            w={[, , '400px', '460px', '540px', '640px']}
            display={['none', 'none', 'block']}
            transform={[
              ,
              ,
              'translateY(12px)',
              'translateY(40px)',
              'translateY(55px)',
              'translateY(60px)'
            ]}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
