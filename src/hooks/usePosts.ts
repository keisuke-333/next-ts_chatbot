import { useCallback, useState } from 'react'
import axios from 'axios'
import type { Post } from '@prisma/client'

import { useMessage } from './useMessage'

export const usePosts = () => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Array<Post>>([])
  const { showMessage } = useMessage()

  const getPosts = useCallback(() => {
    setLoading(true)
    axios
      .get<Array<Post>>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/history/list`)
      .then((res) => setPosts(res.data))
      .catch(() => showMessage({ title: 'チャット情報の取得に失敗しました', status: 'error' }))
      .finally(() => setLoading(false))
  }, [])

  return { getPosts, posts, setPosts, loading }
}
