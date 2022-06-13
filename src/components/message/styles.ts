import styled, { css } from 'styled-components'

const mineStyle = css`
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 8px;
  
  background-color: ${({ theme }) => theme.palette.primary};
  color: #ffffff;
`

const theirsStyle = css`
  justify-content: flex-start;
  align-items: flex-start;
  
  border-radius: 8px;
  
  background-color: ${({ theme }) => theme.palette.backgrounds.light};
  color: rgb(26, 26, 26);
`

export const MessageContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  padding: ${({ theme }) => theme.spacing.s200};
  
  font-size: 14px;
  ${({ isMine }) => (isMine ? mineStyle : theirsStyle)};
  word-break: break-word;
`
