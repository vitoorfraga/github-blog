import { styled } from 'styled-components'

export const ProfileCardContainer = styled.div`
  max-width: 54rem;
  background-color: ${(props) => props.theme['base-profile']};
  margin: -5.5rem auto 0 auto;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  padding: 2rem 2.5rem;

  border-radius: 10px;

  display: flex;
  gap: 2rem;
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  border: none;
  outline: none;
`
export const UserDetails = styled.div`
  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-title']};
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    width: 38.25rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;

      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
        transition: text-decoration 0.2s;
      }
    }
  }
  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 25.6px;
    height: 3.25rem;
    display: block;
    /* width: 38.25rem; */
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  margin-top: 1.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
