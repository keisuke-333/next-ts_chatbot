import React, { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { Box, Grid } from '@chakra-ui/react'
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore'

import { db } from '../firebase/client'
import { UserMsg } from '../components/UserMsg'
import { BotMsg } from '../components/BotMsg'
import { InputForm } from '../components/InputForm'

type Post = {
  userInput: string
  botResponse: string
  responseTimestamp: number
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const scrollBottomRef = useRef<HTMLDivElement>(null)

  console.log('レンダリングテスト')

  useEffect(() => {
    const corectionRef = collection(db, 'posts')
    const q = query(corectionRef, orderBy('response_timestamp', 'asc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        userInput: doc.data().user_input,
        botResponse: doc.data().bot_response,
        responseTimestamp: doc.data().response_timestamp.toDate().getTime()
      })))
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    scrollBottomRef?.current?.scrollIntoView()
  }, [posts])

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
          <div ref={scrollBottomRef}/>
        </Box>
        <InputForm />
      </Box>
    </Grid>
  )
}

export default Home
