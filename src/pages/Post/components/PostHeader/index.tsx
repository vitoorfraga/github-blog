import { Link } from 'react-router-dom'
import {
  PageHeaderBody,
  PageHeaderBottom,
  PageHeaderTop,
  PostHeaderContainer,
} from './styles'

import gitIcon from './../../../../assets/icons/gitIcon.svg'
import dateIcon from './../../../../assets/icons/dateIcon.svg'
import commentsIcon from './../../../../assets/icons/comentIcon.svg'
import backIcon from './../../../../assets/icons/backIcon.svg'
import viewIcon from './../../../../assets/icons/linkArrow.svg'
import { dateFormatter } from '../../../../utils/formmater'
import SkeletonLoading from '../../../../components/SkeletonLoading'

interface PostHeaderProps {
  title: string | undefined
  date: string | undefined
  comments: number | undefined
  gitLink: string | undefined
  authorName: string | undefined
  authorProfileLink: string | undefined
  isLoading?: boolean
}

export function PostHeader({
  authorName,
  authorProfileLink,
  comments,
  date,
  gitLink,
  title,
  isLoading,
}: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      {isLoading ? (
        <SkeletonLoading height={20} lines={4} spacings={10} />
      ) : (
        <>
          <PageHeaderTop>
            <Link to="/" title="Voltar">
              <span>
                <img src={backIcon} alt="Retornar ao blog" />
                Voltar
              </span>
            </Link>
            <a
              href={gitLink}
              title="Ver no Github"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Ver no github
                <img src={viewIcon} alt="Ver publicação no github" />
              </span>
            </a>
          </PageHeaderTop>

          <PageHeaderBody>
            <h1>{title}</h1>
          </PageHeaderBody>

          <PageHeaderBottom>
            <a
              href={authorProfileLink}
              title="Autor"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitIcon} alt="Usuário no github" />
              {authorName}
            </a>
            <a href="" title="Data de publicação">
              <img src={dateIcon} alt="Tempo de publicação" />
              {date && dateFormatter.format(new Date(date))}
            </a>
            <a href="" title="Quantidade de comentários">
              <img src={commentsIcon} alt="Quantidade de comentários" />
              {comments}
            </a>
          </PageHeaderBottom>
        </>
      )}
    </PostHeaderContainer>
  )
}
