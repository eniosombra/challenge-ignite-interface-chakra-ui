import Link from 'next/link'
import { Flex, Text, Heading, Box } from '@chakra-ui/react'

type BannerProps = {
  title: string
  image: string
  description: string
}

export function Banner({ title, image, description }: BannerProps) {
  return (
    <Flex
      bgImage={`/images/${image}`}
      h={450}
      align="center"
      justify="center"
      direction="column"
    >
      <Link href="/continent">
        <Box _hover={{ cursor: 'pointer' }}>
          <Heading color="app.title" mb={4}>
            {title}
          </Heading>
          <Text color="app.info" fontSize="lg">
            {description}
          </Text>
        </Box>
      </Link>
    </Flex>
  )
}
