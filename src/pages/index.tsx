import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import type { Post } from '@prisma/client'
import axios from 'axios'
import { Box, Grid } from '@chakra-ui/react'

import { UserMsg } from '../components/UserMsg'
import { BotMsg } from '../components/BotMsg'
import { InputForm } from '../components/InputForm'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get<Array<Post>>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/history/list`)
      setPosts(res.data)
    }
    getPosts()
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
        <InputForm
          posts={posts}
          setPosts={setPosts}
        />
        <Box
          h='90%'
          p={4}
          rounded='lg'
          bg='gray.50'
          overflowY='auto'
        >
          {posts.map((post, key) => (
            <React.Fragment key={key}>
              <UserMsg
                userInput={post.userInput}
                responseTimestamp={post.responseTimestamp}
              />
              <BotMsg
                botResponse={post.botResponse}
                responseTimestamp={post.responseTimestamp}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Grid>
  )
}

export default Home
