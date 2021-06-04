import { Box, Flex, Image, Text } from '@chakra-ui/react'

type CityCardProps = {
  country: string
  city: string
  image: string
  country_flag: string
}
export function CityCard({
  country,
  city,
  image,
  country_flag
}: CityCardProps) {
  return (
    <Box
      w={256}
      h={279}
      mb={4}
      borderRadius={4}
      align="left"
      border="1px"
      borderColor="app.highlight"
    >
      <Image src={image} alt="city" mb={6} w={256} h={173} />

      <Flex align="center" justify="space-between">
        <Box mx={6}>
          <Text fontWeight="semibold" fontSize={20}>
            {city}
          </Text>
          <Text>{country}</Text>
        </Box>
        <Image src={country_flag} alt="flag" mr={6} />
      </Flex>
    </Box>
  )
}
