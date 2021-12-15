import { memo } from 'react'
import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, Input, IconButton, Stack, Flex } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

export const InputForm = memo(() => {
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
      console.log(res.data)
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
      justify='flex-end'
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
