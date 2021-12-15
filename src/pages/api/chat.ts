import { NextApiHandler } from 'next'
import axios from 'axios'
import { addDoc, collection } from 'firebase/firestore'

import { db } from '../../firebase/client'

const chat: NextApiHandler = async (req, res) => {
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

  try {
    const corectionRef = collection(db, 'posts')
    const docRef = await addDoc(corectionRef, {
      user_input: userInput,
      bot_response: botResponse,
      response_timestamp: responseTimestamp,
    })
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }

  return res.status(200).json({
    user_input: userInput,
    bot_response: botResponse,
    response_timestamp: responseTimestamp,
  })
}

export default chat
