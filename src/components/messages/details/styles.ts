import styled from 'styled-components'

import AvatarBase from '@/components/avatar'
import Button from '@/components/button'

export const Avatar = styled(AvatarBase)`
  margin-bottom: ${({ theme }) => theme.spacing.s200};
`

export const DetailBox = styled.aside`
  background-color: ${({ theme }) => theme.palette.backgrounds.light};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  padding: ${({ theme }) => theme.spacing.s100};

  @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    min-height: 250px;
    padding: ${({ theme }) => theme.spacing.s200};
  }
`

export const DetailTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.s100};
`

export const DetailHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const LastMessageDate = styled.span`
  color: darkgray;
  font-size: 0.75rem;
`

export const DeleteButton = styled(Button)`
  justify-self: flex-end;
`
