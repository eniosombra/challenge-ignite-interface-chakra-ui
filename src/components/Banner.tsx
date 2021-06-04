import Link from 'next/link'
import { Flex, Text, Heading, Box } from '@chakra-ui/react'

type BannerProps = {
  id: string
  name: string
  image: string
  title: string
}

export function Banner({ id, name, image, title }: BannerProps) {
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
            {title}
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}
