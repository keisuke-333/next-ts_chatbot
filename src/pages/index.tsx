import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import type { Post } from '@prisma/client'
import axios from 'axios'

import { Layout } from '../components/Layout'
import { Form } from '../components/Form'
import { ChatArea } from '../components/ChatArea'
import { User } from '../components/User'
import { Bot } from '../components/Bot'

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
    <Layout>
      <Form
        posts={posts}
        setPosts={setPosts}
      />
      <ChatArea>
        {posts.map((post, key) => (
          <React.Fragment key={key}>
            <User
              userInput={post.userInput}
              responseTimestamp={post.responseTimestamp}
            />
            <Bot
              botResponse={post.botResponse}
              responseTimestamp={post.responseTimestamp}
            />
          </React.Fragment>
        ))}
      </ChatArea>
    </Layout>
  )
}

export default Home
