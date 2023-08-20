import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { ProfileCard } from '../../components/ProfileCard'
import { searchAPI } from '../../lib/axios'
import Post from './components/Post'
import { SearchForm } from './components/SearchForm'
import { PostsContainer } from './styles'
import { dateFormatter } from '../../utils/formmater'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface Post {
  id: number
  title: string
  updated_at: string
  body: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  async function fetchIssues() {
    // const response = await searchAPI.get(`search/issues?q=${'vitoorfraga'}`)
    const response = await searchAPI.get(
      '/search/issues?q=repo:vitoorfraga/github-blog',
    )

    setPosts(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <>
      <Header />
      <ProfileCard />
      <SearchForm />

      <PostsContainer>
        {posts?.map((post: Post) => {
          return (
            <Post
              key={post.id}
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
