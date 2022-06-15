import styled from 'styled-components'

export const Footer = styled.footer`
  display: grid;
  grid-column: 2;
  grid-gap: 32px;
  grid-row: 1;
  grid-template-columns: 9fr 1fr;
  padding: ${({ theme }) => theme.spacing.s300} ${({ theme }) => theme.spacing.s200} 0 ${({ theme }) => theme.spacing.s200};
  width: 100%;
`
