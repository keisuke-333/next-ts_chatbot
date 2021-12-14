import { memo, VFC } from 'react'
import {
  Wrap,
  WrapItem,
  Avatar,
  Center,
  AvatarBadge,
  Text,
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import dayjs from 'dayjs'

type Props = {
  message: string
  timestamp: number
}

export const OwnerMsg: VFC<Props> = memo((props) => {
  const { message, timestamp } = props
  const avatarSize = useBreakpointValue({ base: 'xs', md: 'sm' })

  return (
    <Wrap
      mb={4}
      justify='flex-end'
    >
      <WrapItem>
        <Text
          fontSize={4}
          mt='auto'
        >
          {dayjs(timestamp).format('hh:mm:ss')}
        </Text>
      </WrapItem>
      <WrapItem
        maxW={{base: '63%', md: '70%'}}
        pt={4}
      >
        <Center
          fontSize={{base: 'sm', md: 'md'}}
          color='white'
          bg='teal.300'
          px={3}
          py={2}
          rounded='2xl'
          borderTopRightRadius='0'
        >
          {message}
        </Center>
      </WrapItem>
      <WrapItem>
        <Avatar size={avatarSize}>
          <AvatarBadge boxSize='1.25em' bg='teal.500' />
        </Avatar>
      </WrapItem>
    </Wrap>
  )
})