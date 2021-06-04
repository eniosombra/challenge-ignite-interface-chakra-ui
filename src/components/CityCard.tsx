import { Box, Image, Text } from '@chakra-ui/react'

type CityCardProps = {
  country: string
  city: string
}
export function CityCard({ country, city }: CityCardProps) {
  return (
    <Box w={256} h={279} bg="purple.300" borderRadius={4} align="left" mb={4}>
      <Image src="/images/londres.png" alt="city" mb={8} />
      <Text mx={6} fontWeight="semibold">
        {city}
      </Text>
      <Text mx={6}>{country}</Text>
    </Box>
  )
}
