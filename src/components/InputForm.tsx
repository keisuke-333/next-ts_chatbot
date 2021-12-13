import { memo } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormControl, Input, IconButton, Stack, Flex } from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import { db } from '../firebase/client'

type Input = {
  text: string
}

export const InputForm = memo(() => {
  const {
    handleSubmit,
    register,
    formState,
    reset
  } = useForm({
    defaultValues: {text: ''}
  })

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const corectionRef = collection(db, 'posts')
    await addDoc(corectionRef, {message: data.text, timestamp: serverTimestamp()})
    reset()
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
              {...register('text')}
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
