import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-flow: column-reverse wrap;
  margin: auto;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
  }
`

export const GoBackContainer = styled.div`
  display: none;
  margin-bottom: ${({ theme }) => theme.spacing.s100};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: flex;
  }
`

export const BackLink = styled.a`
  color: ${({ theme }) => theme.palette.grays.light};
  font-size: 0.75rem;

  &:hover {
    cursor: pointer;
  }
`

export const Conversation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 70%;
  }
`

export const SideContainer = styled.aside`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    margin-left: ${({ theme }) => theme.spacing.s200};
    width: calc(30% - ${({ theme }) => theme.spacing.s200});
  }
`
