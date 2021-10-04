import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p className="text-white">Post: {pid}</p>
}

export default Post