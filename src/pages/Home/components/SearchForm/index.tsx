import { SearchFormContainer, SearchFormTop, SearchInput } from './styles'

interface searchFormProps {
  count: number
}

export function SearchForm({ count }: searchFormProps) {
  return (
    <SearchFormContainer>
      <SearchFormTop className="">
        <h3>Publicações</h3>
        <span>{count} Publicações</span>
      </SearchFormTop>

      <form action="">
        <SearchInput type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
