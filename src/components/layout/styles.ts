import styled from 'styled-components'

import AvatarBase from '@/components/avatar'

export const Container = styled.div`
  display: flex;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.backgrounds.contrasted};
  min-height: 100vh;
  font-size: 14px;
  word-break: break-word;
`

export const Content = styled.div`
  margin-left: 64px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.s200} ${({ theme }) => theme.spacing.s300};
  width: 100%;
  justify-content: center;
`

export const Menu = styled.aside`
  height: 100vh;
  width: 64px;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.s200} ${({ theme }) => theme.spacing.s100};
  
  background-color: ${({ theme }) => theme.palette.primary};
`

export const Avatar = styled(AvatarBase)`
`
