import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  color: #ddd;
  display: flex;
  flex-direction: column;
  font-size: 5rem;
  height: 100%;
  justify-content: center;
  user-select: none;
  width: 100%;
`

export const Text = styled.p`
  color: #aaa;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.s200};
`
