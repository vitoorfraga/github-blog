import { PostContainer, PostHeader } from './styles'

export interface PostProps {
  title: string
  createdAt?: string
  description: string
  url: string
}

export default function Post({
  title,
  createdAt,
  description,
  url,
}: PostProps) {
  return (
    <PostContainer to={url}>
      <PostHeader>
        <h2>{title}</h2>
        <time>{createdAt}</time>
      </PostHeader>

      <p>{description}</p>
    </PostContainer>
  )
}
