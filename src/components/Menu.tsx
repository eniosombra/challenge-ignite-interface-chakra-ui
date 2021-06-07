import {
  Box,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export function Menu() {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })
  const menus = [
    { name: 'vida noturna', image: 'night.svg' },
    { name: 'praia', image: 'beach.svg' },
    { name: 'moderno', image: 'modern.svg' },
    { name: 'clássico', image: 'classic.svg' },
    { name: 'e mais...', image: 'more.svg' }
  ]

  return (
    <SimpleGrid columns={[null, 2, 3, 5]} spacing={5}>
      {menus.map(menu => (
        <GridItem key={menu.name} align="center">
          {isMobile ? (
            <>
              <Image src={`/images/${menu.image}`} alt={menu.name} />
              <Text mt={5} fontWeight="semibold" fontSize={[null, '18', '24']}>
                {menu.name}
              </Text>
            </>
          ) : (
            <Flex align="center" justify="center" mt={4}>
              <Box w={3} h={3} bg="app.highlight" borderRadius="100%" />
              <Text ml={4} fontWeight="semibold" fontSize={[null, '18', '24']}>
                {menu.name}
              </Text>
            </Flex>
          )}
        </GridItem>
      ))}
    </SimpleGrid>
  )
}
