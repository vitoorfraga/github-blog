import loaderIcon from './../../assets/circles.svg'
import { LoaderContainer } from './styles'

export function Loader() {
  return (
    <LoaderContainer>
      <img
        src={loaderIcon}
        alt="Componente que representa que o elemento está sendo renderizado"
      />
    </LoaderContainer>
  )
}
