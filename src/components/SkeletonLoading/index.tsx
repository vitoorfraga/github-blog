import { SkeletonLoadingContainer, SkeletonLoadingContent } from './styles'

export interface SkeletonLoadingProps {
  lines?: number
  height?: number
  spacings?: number
}

export default function SkeletonLoading({
  lines,
  height,
  spacings,
}: SkeletonLoadingProps) {
  return (
    <SkeletonLoadingContainer spacings={spacings}>
      {[...Array(lines)].map((_, index) => {
        return <SkeletonLoadingContent key={index} height={height} />
      })}
    </SkeletonLoadingContainer>
  )
}
