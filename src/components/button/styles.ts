import styled, { css } from 'styled-components'
import { Props } from '@/components/button/index'

const primaryStyle = css`
  border: none;
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.texts.light};

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`

const secondaryStyle = css`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.primary};

  &:hover {
    color: ${({ theme }) => theme.palette.texts.light};
    background-color: ${({ theme }) => theme.palette.primary};
  }
`

export const Button = styled.button<Pick<Props, 'variant'>>`
  border-radius: 16px;
 
  padding:  ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s200};
  transition: 0.2s background-color, color ease-in;
  
  &:hover {
    cursor: pointer;
  }
  
  &:disabled {
    cursor: not-allowed;
    background-color: rgb(244, 246, 247);
    color: #999999;
  }
  
  ${({ variant }) => (variant === 'primary' ? primaryStyle : secondaryStyle)};
`
