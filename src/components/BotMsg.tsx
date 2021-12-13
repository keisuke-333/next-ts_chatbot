import { memo, ReactNode, VFC } from 'react'
import {
  Wrap,
  WrapItem,
  Avatar,
  Center,
  AvatarBadge,
} from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const BotMsg: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <Wrap mb={4}>
      <WrapItem>
        <Avatar>
          <AvatarBadge boxSize='1.25em' bg='purple.500' />
        </Avatar>
      </WrapItem>
      <WrapItem
        maxW={{base: '75%', md: '80%'}}
        pt={5}
      >
        <Center
          fontSize={{base: 'sm', md: 'md'}}
          color='white'
          bg='purple.300'
          p={3}
          rounded='2xl'
          borderTopLeftRadius='0'
        >
          {children}
        </Center>
      </WrapItem>
    </Wrap>
  )
})