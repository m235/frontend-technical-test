import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.backgrounds.contrasted};
  display: flex;
  font-size: 0.85rem;
  padding: 0;
  word-break: break-word;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.s100};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: ${({ theme }) => theme.spacing.s400};
    padding: ${({ theme }) => theme.spacing.s200} ${({ theme }) => theme.spacing.s300};
  }
`

export const Menu = styled.aside`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    align-items: center;
    background-color: ${({ theme }) => theme.palette.primary};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    left: 0;
    padding: ${({ theme }) => theme.spacing.s200} ${({ theme }) => theme.spacing.s100};
    position: fixed;
    top: 0;
    width: 64px;
  }
`
