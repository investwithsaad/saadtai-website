import { Stack, Text } from '@sanity/ui'

export const CharacterCountInput = (props: any) => {
  const { value = '' } = props
  const length = value.length

  const getColor = (): string => {
    if (length < 50) return '#fbbf24'
    if (length > 70) return '#ef4444'
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
