import { Flex, Text, Heading } from '@chakra-ui/react'

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
      <Heading color="app.title" mb={4}>
        {title}
      </Heading>
      <Text color="app.info" fontSize="lg">
        {description}
      </Text>
    </Flex>
  )
}
