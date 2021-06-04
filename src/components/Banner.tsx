import Link from 'next/link'
import { Flex, Text, Heading, Box } from '@chakra-ui/react'

type BannerProps = {
  id: string
  name: string
  image: string
  description: string
}

export function Banner({ id, name, image, description }: BannerProps) {
  return (
    <Flex
      bgImage={image}
      h={450}
      align="center"
      justify="center"
      direction="column"
    >
      <Link href={`/cities/${id}`}>
        <Box _hover={{ cursor: 'pointer' }}>
          <Heading color="app.title" mb={4}>
            {name}
          </Heading>
          <Text color="app.info" fontSize="lg">
            {description}
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}
