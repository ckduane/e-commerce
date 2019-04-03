import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: transparent;
  border: 0.05rem solid var(--mainWhite);
  border-radius: 0.5rem;
  color: var(--mainWhite);
  cursor: pointer;
  font-size: 1.4rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  padding: 0.2rem 0.5rem;
  text-transform: capitalize;
  transition: all .3s ease;
  &:hover, &:focus {
    background: var(--mainWhite);
    color: var(--mainGreen);
    outline: none;
  }
`