import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProfileCard } from '../../components/ProfileCard'
import { searchAPI } from '../../lib/axios'
import Post from './components/Post'
import { SearchForm } from './components/SearchForm'
import { PostsContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Post {
  id: number
  title: string
  updated_at: string
  body: string
  number: number
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  // const [isLoading, setIsLoading] = useState(true)

  async function fetchIssues() {
    // const response = await searchAPI.get(`search/issues?q=${'vitoorfraga'}`)
    const response = await searchAPI.get(
      '/search/issues?q=repo:vitoorfraga/github-blog',
    )

    console.log(response)

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <>
      <Header />
      <ProfileCard />
      <SearchForm count={posts.length} />

      <PostsContainer>
        {posts?.map((post: Post) => {
          return (
            <Post
              key={post.id}
              url={`post/${post.number}`}
              title={post.title}
              description={post.body}
              createdAt={formatDistanceToNow(new Date(post.updated_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            />
          )
        })}
      </PostsContainer>
    </>
  )
}
