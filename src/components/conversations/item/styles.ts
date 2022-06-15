import styled from 'styled-components'

import AvatarBase from '@/components/avatar'

export const Container = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  height: 120px;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.s100};
  padding: ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s200};

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation.z1};
    cursor: pointer;
  }
`

export const Avatar = styled(AvatarBase)`
  margin-right: ${({ theme }) => theme.spacing.s200};
`

export const ConversationDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ConversationTitle = styled.h2`
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  margin-bottom: ${({ theme }) => theme.spacing.s100};
  overflow: hidden;
`
