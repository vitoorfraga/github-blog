import { HeaderContainer } from './styles'
import headerBackground from './../../assets/cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerBackground} alt="Capa da Github Blog" />
    </HeaderContainer>
  )
}
