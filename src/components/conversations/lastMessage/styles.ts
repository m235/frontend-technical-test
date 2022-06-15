import styled from 'styled-components'

export const ConversationLastMessage = styled.div`
  -webkit-box-orient: vertical;
  color: darkgray;
  display: -webkit-box;
  font-size: 0.75rem;
  -webkit-line-clamp: 2;
  margin-bottom: ${({ theme }) => theme.spacing.s100};
  overflow: hidden;
`

export const ConversationLastMessageDate = styled.div`
  align-self: flex-end;
  color: darkgray;
  font-size: 0.75rem;
`
