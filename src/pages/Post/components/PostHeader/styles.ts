import { styled } from 'styled-components'

export const PostHeaderContainer = styled.header`
  max-width: 54rem;
  background-color: ${(props) => props.theme['base-profile']};
  margin: -5.5rem auto 0 auto;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  border-radius: 10px;

  display: grid;
`

export const PageHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 100%;
      margin-top: 1px;

      transition: background 0.2s ease;
    }
    &:hover::after {
      background-color: ${(props) => props.theme.blue};
    }
  }
`
export const PageHeaderBody = styled.div`
  h1 {
    font-size: 1.5rem;
    margin: 1.25rem 0;
  }
`

export const PageHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    color: ${(props) => props.theme['base-span']};
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
