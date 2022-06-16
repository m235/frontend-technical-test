import styled from 'styled-components'

export const ConversationLastMessage = styled.div`
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.palette.grays.dark};
  display: -webkit-box;
  font-size: 0.75rem;
  -webkit-line-clamp: 2;
  margin-bottom: ${({ theme }) => theme.spacing.s100};
  overflow: hidden;
`

export const ConversationLastMessageDate = styled.div`
  align-self: flex-end;
  color: ${({ theme }) => theme.palette.grays.dark};
  font-size: 0.75rem;
`
