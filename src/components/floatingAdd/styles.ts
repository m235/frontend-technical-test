import styled from 'styled-components'

export const FloatingAdd = styled.button`
  background-color: #000;
  border: none;
  border-radius: 50%;
  bottom: 48px;
  color: ${({ theme }) => theme.palette.texts.light};
  font-size: 1.5rem;
  height: 64px;
  opacity: 0.75;
  padding: ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s200};
  position: fixed;
  right: 48px;
  transition: 0.1s opacity linear, 0.25s transform ease-in;
  width: 64px;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
    transform: rotate(90deg);
  }
`
