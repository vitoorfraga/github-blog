import { css, keyframes, styled } from 'styled-components'

interface SkeletonLoadingContainerProps {
  spacings?: number
}

export const SkeletonLoadingContainer = styled.div<SkeletonLoadingContainerProps>`
  ${({ spacings }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${spacings}px;
  `}
`
interface SkeletonLoadingContentProps {
  height?: number
}

const animation = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 135% 0%;
  }
`

export const SkeletonLoadingContent = styled.div<SkeletonLoadingContentProps>`
  ${({ height }) => css`
    width: 100%;
    height: ${height}px;

    opacity: 0.6;

    border-radius: 6px;

    cursor: progress;

    background: rgb(11, 27, 43);
    background: linear-gradient(
      90deg,
      rgba(11, 27, 43, 1) 0%,
      rgba(44, 65, 88, 1) 35%,
      rgba(7, 20, 34, 1) 100%
    );

    background-size: 400% 400%;
  `}

  animation: ${animation} 1.2s ease-in-out infinite
`
