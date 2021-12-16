import { NextApiHandler } from 'next'
import { collection, onSnapshot, orderBy, query, limit } from 'firebase/firestore'

import { db } from '../../../firebase/client'

const list: NextApiHandler = (req, res) => {
  if (req.method !== 'GET') res.status(405).end()

  const corectionRef = collection(db, 'posts')
  const q = query(corectionRef, orderBy('response_timestamp', 'desc'), limit(10))
  try {
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return {
          user_input: doc.data().user_input,
          bot_response: doc.data().bot_response,
          response_timestamp: doc.data().response_timestamp.toDate(),
        }
      })
      return res.status(200).json(data)
    })
  } catch (e) {
    return res.status(400).json({ message: e.message })
  }
}

export default list
