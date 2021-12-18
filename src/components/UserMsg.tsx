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

type Props = Pick<Post, 'userInput' | 'responseTimestamp'>

export const UserMsg: VFC<Props> = memo((props) => {
  const { userInput, responseTimestamp } = props
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
          {dayjs(responseTimestamp).format('hh:mm:ss')}
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
          {userInput}
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