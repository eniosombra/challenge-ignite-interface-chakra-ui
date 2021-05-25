import { Box, Flex, Image, Text } from '@chakra-ui/react'

export function Menu() {
  const menus = [
    { name: 'vida noturna', image: 'night.svg' },
    { name: 'praia', image: 'beach.svg' },
    { name: 'moderno', image: 'modern.svg' },
    { name: 'clássico', image: 'classic.svg' },
    { name: 'e mais...', image: 'more.svg' }
  ]

  return (
    <Flex justify="space-around">
      {menus.map((menu) => (
        <Box key={menu.name} align="center">
          <Image src={`/images/${menu.image}`} alt={menu.name} />
          <Text mt={5} fontWeight="semibold" fontSize="24">
            {menu.name}
          </Text>
        </Box>
      ))}
    </Flex>
  )
}
