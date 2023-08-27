import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { styled } from 'styled-components'

export const MarkdownContainer = styled(ReactMarkdown)`
  max-width: 54rem;
  padding: 2rem 2.5rem;
  margin: 0 auto;

  /* Titulos */
  h1,
  h2 {
    margin: 2rem 0;
  }

  /* => Textos gerais */
  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }

  /* Trechos de código no meio do texot */
  code {
    background-color: ${(props) => props.theme['base-border']};
    padding: 0 0.4rem;
    border-radius: 2px;
  }

  /* Bloco de código */
  pre code {
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme['base-post']};
    border-radius: 2px;
    margin: 1.5rem 0;
    align-self: stretch;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }
`

export const MarkDownLoadingContainer = styled.div`
  max-width: 54rem;
  padding: 2rem 2.5rem;
  margin: 0 auto;

  display: grid;
  gap: 2rem;
`
