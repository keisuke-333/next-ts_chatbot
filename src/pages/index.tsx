import {
  Box,
  Flex,
  Grid,
  FormControl,
  Input,
  IconButton,
  Stack,
  Wrap,
  WrapItem,
  Avatar,
  Center,
  AvatarBadge,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Grid
      templateColumns='100vw'
      templateRows='100vh'
    >
      <Box
        w={{base: '100%', md: '90%', lg: '450px'}}
        h={{base: '100%', md: '95%', lg: '600px'}}
        p={4}
        justifySelf='center'
        alignSelf='center'
        shadow='lg'
        rounded='lg'
        bg='gray.200'
      >
        <Box
          h='90%'
          p={4}
          rounded='lg'
          bg='gray.50'
          overflowY='auto'
        >
          <Wrap mb={4}>
            <WrapItem>
              <Avatar>
                <AvatarBadge boxSize='1.25em' bg='purple.500' />
              </Avatar>
            </WrapItem>
            <WrapItem
              maxW={{base: '75%', md: '80%'}}
              pt={4}
            >
              <Center
                color='white'
                bg='purple.300'
                p={4}
                rounded='md'
              >
                テストテストテストテストテストテストテストテストテストテストテステストテストテストテストテストテストテステストテストテス
              </Center>
            </WrapItem>
          </Wrap>
          <Wrap
            mb={4}
            justify='flex-end'
          >
            <WrapItem
              maxW={{base: '75%', md: '80%'}}
              pt={4}
            >
              <Center
                color='white'
                bg='teal.300'
                p={4}
                rounded='md'
              >
                テストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテ
              </Center>
            </WrapItem>
            <WrapItem>
              <Avatar>
                <AvatarBadge boxSize='1.25em' bg='teal.500' />
              </Avatar>
            </WrapItem>
          </Wrap>
          <Wrap
            mb={4}
            justify='flex-end'
          >
            <WrapItem
              maxW={{base: '75%', md: '80%'}}
              pt={4}
            >
              <Center
                color='white'
                bg='teal.300'
                p={4}
                rounded='md'
              >
                テストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテテストテストテストテストテストテストテ
              </Center>
            </WrapItem>
            <WrapItem>
              <Avatar>
                <AvatarBadge boxSize='1.25em' bg='teal.500' />
              </Avatar>
            </WrapItem>
          </Wrap>
          <Wrap mb={4}>
            <WrapItem>
              <Avatar>
                <AvatarBadge boxSize='1.25em' bg='purple.500' />
              </Avatar>
            </WrapItem>
            <WrapItem
              maxW={{base: '75%', md: '80%'}}
              pt={4}
            >
              <Center
                color='white'
                bg='purple.300'
                p={4}
                rounded='md'
              >
                テストテストテスト
              </Center>
            </WrapItem>
          </Wrap>
        </Box>
        <Flex
          h='10%'
          flexDir='column'
          justify='flex-end'
        >
          <Stack isInline>
            <FormControl>
              <Input
                id="text"
                type="text"
                placeholder='テキストを入力してください'
                bg='gray.50'
                focusBorderColor='teal.500'
              />
            </FormControl>
            <IconButton
              colorScheme="teal"
              aria-label='send message'
              icon={<ChatIcon />}
            />
          </Stack>
        </Flex>
      </Box>
    </Grid>
  )
}

export default Home
