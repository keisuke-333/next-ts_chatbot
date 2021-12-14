import { useState, useEffect, useRef } from 'react'
import type { NextPage } from 'next'
import { Box, Grid } from '@chakra-ui/react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { db } from '../firebase/client'
import { OwnerMsg } from '../components/OwnerMsg'
import { BotMsg } from '../components/BotMsg'
import { InputForm } from '../components/InputForm'

const botMsg = {
  message: 'ボットです。質問がある場合はなにか投稿をしてください。',
  timestamp: 1639396737199
}

type Post = {
  id: string
  message: string
  timestamp: number
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const scrollBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const corectionRef = collection(db, 'posts')
    const q = query(corectionRef, orderBy('timestamp', 'asc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        message: doc.data().message,
        timestamp: doc.data().timestamp?.toDate().getTime()
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
          <BotMsg
            message={botMsg.message}
            timestamp={botMsg.timestamp}
          />
          {posts.map((post) => (
            <OwnerMsg
              key={post.id}
              message={post.message}
              timestamp={post.timestamp}
            />
          ))}
          <div ref={scrollBottomRef}/>
        </Box>
        <InputForm />
      </Box>
    </Grid>
  )
}

export default Home
