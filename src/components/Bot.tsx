import { memo, VFC } from 'react'
import dayjs from 'dayjs'
import {
  Wrap,
  WrapItem,
  Avatar,
  Center,
  AvatarBadge,
  Text,
} from '@chakra-ui/react'
import { useBreakpointValue } from '@chakra-ui/media-query'
import type { Post } from '@prisma/client'

type Props = Pick<Post, 'botResponse' | 'responseTimestamp'>

export const Bot: VFC<Props> = memo((props) => {
  const { botResponse, responseTimestamp } = props
  const avatarSize = useBreakpointValue({ base: 'xs', md: 'sm' })

  return (
    <Wrap mb={4}>
      <WrapItem>
        <Avatar size={avatarSize}>
          <AvatarBadge boxSize='1.25em' bg='purple.500' />
        </Avatar>
      </WrapItem>
      <WrapItem
        maxW={{base: '63%', md: '70%'}}
        pt={4}
      >
        <Center
          fontSize={{base: 'sm', md: 'md'}}
          color='white'
          bg='purple.300'
          px={3}
          py={2}
          rounded='2xl'
          borderTopLeftRadius='0'
        >
          {botResponse}
        </Center>
      </WrapItem>
      <WrapItem>
        <Text
          fontSize='xs'
          mt='auto'
        >
          {dayjs(responseTimestamp).subtract(9, 'hour').format('HH:mm:ss')}
        </Text>
      </WrapItem>
    </Wrap>
  )
})