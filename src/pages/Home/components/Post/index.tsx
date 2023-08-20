import { PostContainer, PostHeader } from './styles'

export interface PostProps {
  title: string
  createdAt?: string
  description: string
}

export default function Post({ title, createdAt, description }: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <h2>{title}</h2>
        <time>{createdAt}</time>
      </PostHeader>

      <p>{description}</p>
    </PostContainer>
  )
}
