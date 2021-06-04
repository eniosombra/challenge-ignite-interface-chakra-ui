import { GridItem, Text } from '@chakra-ui/react'

type QuantityBoxProps = {
  quantity: string
  label: string
}
export function QuantityBox({ quantity, label }: QuantityBoxProps) {
  return (
    <GridItem>
      <Text fontSize={48} fontWeight="semibold" color="app.highlight">
        {quantity}
      </Text>
      <Text fontSize={24} fontWeight="semibold">
        {label}
      </Text>
    </GridItem>
  )
}
