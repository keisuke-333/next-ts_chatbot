import { NextApiHandler } from 'next'

const handler: NextApiHandler = (req, res) => {
  if (req.method !== 'GET') res.status(405).end()

  res.status(200).json([
    {
      user_input: '今日の東京の天気は？',
      bot_response: '晴れです。',
      response_timestamp: '2018-04-10T04:50:40',
    },
    {
      user_input: '今何時？',
      bot_response: '3時40分です。',
      response_timestamp: '2018-04-10T03:40:30',
    },
    {
      user_input: 'こんにちは',
      bot_response: 'こんにちは。',
      response_timestamp: '2018-04-10T02:30:20',
    },
  ])
}

export default handler
