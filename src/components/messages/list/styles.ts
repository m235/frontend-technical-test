import styled from 'styled-components'

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px - 74px - 32px);
  overflow-y: scroll;
  padding: ${({ theme }) => theme.spacing.s200};
  scroll-behavior: smooth;

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    height: calc(100vh - 74px - 32px);
  }
`

export const MessageWrapper = styled.div<{ isMine: boolean }>`
  align-self: ${({ isMine }) => (isMine ? 'end' : 'start')};
  margin-bottom: ${({ theme }) => theme.spacing.s200};
  max-width: 75%;
`
