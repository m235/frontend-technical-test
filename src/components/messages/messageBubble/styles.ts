import styled, { css } from 'styled-components'

const mineStyle = css`
  align-items: flex-end;
  background-color: ${({ theme }) => theme.palette.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.texts.light};
  justify-content: flex-end;
`

const theirsStyle = css`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.palette.backgrounds.light};
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.texts.dark};
  justify-content: flex-start;
`

export const MessageContainer = styled.div<{ isMine: boolean }>`
  display: flex;
  font-size: 14px;
  ${({ isMine }) => (isMine ? mineStyle : theirsStyle)};
  padding: ${({ theme }) => theme.spacing.s200};
  white-space: pre-line;
  word-break: break-word;
`
