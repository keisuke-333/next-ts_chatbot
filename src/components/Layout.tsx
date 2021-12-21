import { Box, Grid } from '@chakra-ui/react'
import { memo, ReactNode, VFC } from 'react'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = memo((props) => {
  const { children } = props

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
        {children}
      </Box>
    </Grid>
  )
})