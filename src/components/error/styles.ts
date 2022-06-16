import styled from 'styled-components'

export const Container = styled.div<{ isFullScreen?: boolean }>`
  align-items: center;
  color: ${({ theme }) => theme.palette.grays.normal};
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  height: ${({ isFullScreen }) => (isFullScreen ? 'calc(100vh - 32px)' : '100%')};
  justify-content: center;
  user-select: none;
  width: 100%;
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.palette.grays.lighter};
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.s200};
`
