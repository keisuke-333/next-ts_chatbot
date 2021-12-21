import { memo, VFC, ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const ChatArea: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <Box
      h='90%'
      p={4}
      rounded='lg'
      bg='gray.50'
      overflowY='auto'
    >
      {children}
    </Box>
  )
})