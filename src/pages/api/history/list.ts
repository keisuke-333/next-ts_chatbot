import { NextApiHandler } from 'next'
import type { Post } from '@prisma/client'
import prisma from '../../../lib/prisma'

const list: NextApiHandler<Array<Post>> = async (req, res) => {
  if (req.method !== 'GET') res.status(405).end()

  const postList = await prisma.post.findMany({
    take: 10,
    orderBy: {
      responseTimestamp: 'desc',
    },
  })

  return res.status(200).json(postList)
}

export default list
