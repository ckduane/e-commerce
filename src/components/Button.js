import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  border-radius: 0.5rem;
  color: var(--mainWhite);
  font-size: 1.4rem;
  padding: 0 0.5rem 0.2rem 0.5rem;
  transition: all .3s ease;
  &:hover, &:focus {
    background: var(--mainWhite);
    color: var(--mainGreen);
    outline: none;
  }
`