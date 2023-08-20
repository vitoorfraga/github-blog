import { styled } from 'styled-components'

export const SearchFormContainer = styled.section`
  margin: 4.56rem auto 0 auto;
  max-width: 54rem;

  form {
    display: flex;
    margin-top: 1.5rem;
  }
`

export const SearchFormTop = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h3 {
    font-size: 1.12rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  flex: 1;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background-color: ${(props) => props.theme['base-input']};

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border-color: ${(props) => props.theme.blue} !important;
  }
`
