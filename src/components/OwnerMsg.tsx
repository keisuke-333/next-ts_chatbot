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

export const OwnerMsg: VFC<Props> = memo((props) => {
  const { children } = props

  return (
    <Wrap
      mb={4}
      justify='flex-end'
    >
      <WrapItem
        maxW={{base: '75%', md: '80%'}}
        pt={5}
      >
        <Center
          fontSize={{base: 'sm', md: 'md'}}
          color='white'
          bg='teal.300'
          p={3}
          rounded='2xl'
          borderTopRightRadius='0'
        >
          {children}
        </Center>
      </WrapItem>
      <WrapItem>
        <Avatar>
          <AvatarBadge boxSize='1.25em' bg='teal.500' />
        </Avatar>
      </WrapItem>
    </Wrap>
  )
})