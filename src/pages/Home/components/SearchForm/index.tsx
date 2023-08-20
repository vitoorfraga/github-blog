import { SearchFormContainer, SearchFormTop, SearchInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormTop className="">
        <h3>Publicações</h3>
        <span>6 Publicações</span>
      </SearchFormTop>

      <form action="">
        <SearchInput type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
