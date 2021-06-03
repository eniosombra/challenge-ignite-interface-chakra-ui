import { Heading, Flex, Text, Box } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      bgImage={'images/banner.svg'}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      align="center"
      h={[, 160, 240, 320, 380, 460]}
    >
      <Box mx={[, 4, 8, 16, 32]} w={[, 300, 460, 600]}>
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
    </Flex>
  )
}
