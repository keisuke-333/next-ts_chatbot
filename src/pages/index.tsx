import {
  Flex,
  FormControl,
  Input,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import { ChatIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Flex justify="center">
      <Stack isInline>
        <FormControl w={300}>
          <Input id="text" type="text"/>
        </FormControl>
        <IconButton
          colorScheme="teal"
          aria-label='send message'
          icon={<ChatIcon />}
        />
      </Stack>
    </Flex>
  )
}

export default Home
