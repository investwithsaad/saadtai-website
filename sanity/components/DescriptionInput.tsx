import { Stack, Text } from '@sanity/ui'

export const DescriptionInput = (props: any) => {
  const { value = '' } = props
  const length = value.length

  const getColor = (): string => {
    if (length < 80 || length > 170) return '#ef4444'
    if (length < 120 || length > 160) return '#fbbf24'
    return '#22c55e'
  }

  return (
    <Stack space={2}>
      {props.renderDefault(props)}
      <Text size={0} style={{ color: getColor() }}>
        {length} characters
      </Text>
    </Stack>
  )
}
