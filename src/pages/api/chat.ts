import { NextApiHandler } from 'next'
import axios from 'axios'
import type { Post } from '@prisma/client'
import prisma from '../../lib/prisma'

const chat: NextApiHandler<Post> = async (req, res) => {
  if (req.method !== 'POST') res.status(405).end()

  const { userInput } = req.body

  const responseTimestamp = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000)
  const hour = responseTimestamp.getHours()
  const min = responseTimestamp.getMinutes()

  let botResponse = ''
  switch (userInput) {
    case 'こんにちは':
      botResponse = 'こんにちは。'
      break
    case '今何時？':
      botResponse = `${hour}時${min}分です。`
      break
    case '今日の東京の天気は？':
      const res = await axios.get('https://weather.tsukumijima.net/api/forecast/city/130010')
      const weather = res.data.forecasts[0].telop
      botResponse = `${weather}です。`
      break
    default:
      botResponse = '正しいテキストを入力してください。'
      break
  }

  const post = await prisma.post.create({
    data: { userInput, botResponse, responseTimestamp },
  })

  return res.status(200).json(post)
}

export default chat
