import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import SkeletonLoading from '../../components/SkeletonLoading'
import { PostHeader } from './components/PostHeader'
import { MarkDownLoadingContainer, MarkdownContainer } from './styles'
import axios from 'axios'

interface PostProps {
  title: string
  body: string
  author: string
  date: string
  commentsQtd: number
  userProfileLink: string
  issueLink: string
}

export function Post() {
  const body: string =
    'O ESLint é uma ferramenta poderosa de análise estática que pode ajudar a manter a qualidade e o estilo do seu código JavaScript e TypeScript. Neste artigo, vamos explorar como configurar e utilizar o ESLint em seu projeto de forma eficaz.\r\n\r\n# O que é o ESLint?\r\nO ESLint é um "linter" de código, o que significa que é uma ferramenta que analisa seu código em busca de problemas de qualidade e estilo. Ele é especialmente popular nas comunidades JavaScript e TypeScript. Foi criado por Nicholas C. Zakas em 2013 e desde então se tornou uma ferramenta essencial para desenvolvedores.\r\n\r\n## Instalação\r\n\r\n- [ ] A instalação do ESLint é um processo crucial para começar a usá-lo em seu projeto. Siga estas etapas simples:\r\n\r\n```\r\nnpm i -D eslint\r\n```\r\n\r\n- [ ] Escolha um "preset" de Linter que atenda às suas necessidades. Neste exemplo, utilizaremos o Rocketseat [ESLint Config](https://github.com/Rocketseat/eslint-config-rocketseat):\r\n\r\n```\r\nnpm i -D eslint @rocketseat/eslint-config\r\n```\r\n\r\n- [ ] Crie um arquivo .eslintrc.json na raiz do seu projeto. Dentro do arquivo .eslintrc.json, configure o ESLint para usar o padrão do preset da Rocketseat:\r\n```\r\n{\r\n  "extends": "@rocketseat/eslint-config/react"\r\n}\r\n```\r\n\r\n# Verificação e correção de erros\r\nAgora que você configurou o ESLint, é hora de verificar e finalizar as configurações:\r\n\r\n- [ ] configure o VSCode para corrigir erros de lint automaticamente durante o desenvolvimento. Certifique de ter essa configuração em seu `settings.json`.\r\n```\r\n"editor.codeActionsOnSave": {\r\n  "source.fixAll.eslint": true \r\n}\r\n```'

  const [post, setPost] = useState<PostProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  async function fetchPost() {
    const response = await axios.get(
      'https://api.github.com/repos/vitoorfraga/github-blog/issues/1',
    )

    const updatedPostData: PostProps = {
      title: response.data.title,
      body: response.data.body,
      author: response.data.user.login,
      userProfileLink: response.data.user.html_url,
      date: response.data.created_at,
      commentsQtd: response.data.comments,
      issueLink: response.data.html_url,
    }
    setPost(updatedPostData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <>
      <Header />

      <PostHeader
        title={post?.title}
        authorName={post?.author}
        date={post?.date}
        comments={post?.commentsQtd}
        gitLink={post?.issueLink}
        authorProfileLink={post?.userProfileLink}
        isLoading={isLoading}
      />

      {isLoading ? (
        <MarkDownLoadingContainer>
          <SkeletonLoading height={20} lines={4} spacings={10} />
          <SkeletonLoading height={20} lines={8} spacings={10} />
        </MarkDownLoadingContainer>
      ) : (
        <MarkdownContainer>{body}</MarkdownContainer>
      )}
    </>
  )
}
