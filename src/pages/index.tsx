import { Fragment, useEffect } from 'react'
import type { NextPage } from 'next'
import { Center, Spinner, Text } from '@chakra-ui/react'

import { usePosts } from '../hooks/usePosts'
import { Layout } from '../components/Layout'
import { Form } from '../components/Form'
import { ChatArea } from '../components/ChatArea'
import { User } from '../components/User'
import { Bot } from '../components/Bot'

const Home: NextPage = () => {
  const { getPosts, posts, setPosts, loading } = usePosts()

  useEffect(() => getPosts(), [])

  return (
    <Layout>
      <Form
        posts={posts}
        setPosts={setPosts}
      />
      <ChatArea>
        {loading ? (
          <Center h="100%">
            <Spinner
              thickness='4px'
              speed='0.6s'
              emptyColor='gray.300'
              color='teal.500'
              size='lg'
            />
          </Center>
        ) : (
          <>
            {!posts.length ? (
              <Center h="100%">
                <Text>入力欄からテキストを送信してください。</Text>
              </Center>
            ) : (
              posts.map((post, key) => (
                <Fragment key={key}>
                  <User
                    userInput={post.userInput}
                    responseTimestamp={post.responseTimestamp}
                  />
                  <Bot
                    botResponse={post.botResponse}
                    responseTimestamp={post.responseTimestamp}
                  />
                </Fragment>
              ))
            )}
          </>
        )}
      </ChatArea>
    </Layout>
  )
}

export default Home
