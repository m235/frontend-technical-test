import styled from 'styled-components'

export const Input = styled.textarea`
  background-color: ${({ theme }) => theme.palette.backgrounds.light};
  border: none;
  border-radius: 16px;
  height: 42px;
  margin-top: 0;
  outline-color: ${({ theme }) => theme.palette.primary};
  padding: 12px;
  resize: none;
  width: 100%;
`
