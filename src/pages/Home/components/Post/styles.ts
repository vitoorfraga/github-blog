import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

export const PostContainer = styled(Link)`
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};

  padding: 2rem;

  p {
    width: 100%;
    height: 112px;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${(props) => props.theme['base-text']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  h2 {
    max-width: 17.68rem;
    height: 4rem;
    overflow: hidden;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 32px;
    color: ${(props) => props.theme['base-title']};

    text-overflow: ellipsis;
  }

  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
    line-height: 22.4px;
    padding-top: 0.31rem;
  }
`
