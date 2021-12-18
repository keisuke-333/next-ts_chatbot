import { memo, VFC, Dispatch, SetStateAction } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, Input, IconButton, Stack, Flex } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import type { Post } from '@prisma/client'

type Props = {
  posts: Array<Post>
  setPosts: Dispatch<SetStateAction<Array<Post>>>
}

export const InputForm: VFC<Props> = memo((props) => {
  const { posts, setPosts } = props

  const {
    handleSubmit,
    register,
    formState,
    reset
  } = useForm({
    defaultValues: {userInput: ''}
  })

  const onSubmit: SubmitHandler<{userInput: string}> = async ({ userInput }) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat`,
        {userInput}
      )
      setPosts([res.data, ...posts])
    } catch(e) {
      const { status, statusText } = e.response
      console.error(`Error! HTTP Status: ${status} ${statusText}`)
    } finally {
      reset()
    }
  }

  return (
    <Flex
      h='10%'
      flexDir='column'
      justify='flex-start'
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack isInline>
          <FormControl>
            <Input
              id='text'
              type='text'
              placeholder='テキストを入力してください'
              bg='gray.50'
              focusBorderColor='teal.500'
              {...register('userInput')}
            />
          </FormControl>
          <IconButton
            type='submit'
            colorScheme='teal'
            aria-label='send message'
            icon={<ChatIcon />}
            isLoading={formState.isSubmitting}
            disabled={!formState.isDirty}
          />
        </Stack>
      </form>
    </Flex>
  )
})
