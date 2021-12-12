import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import {
  Box,
  Flex,
  Grid,
  FormControl,
  Input,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

import { db } from '../firebase/client'
import { OwnerMsg } from '../components/OwnerMsg'
import { BotMsg } from '../components/BotMsg'

const Home: NextPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const unSub = db.collection('posts').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => {
        return doc.data()
      })
      console.log(data)
      setPosts(data)
      // setPosts(
      //   snapshot.docs.map((doc) => ({id: doc.id, message: doc.data().message}))
      // )
    })
    return () => unSub()
  }, [])

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
          <BotMsg>
            テスト
          </BotMsg>
          {posts.map((post, key) => (
            <OwnerMsg key={key}>
              {post.message}
            </OwnerMsg>
          ))}
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
