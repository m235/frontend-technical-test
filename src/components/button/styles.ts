import styled, { css } from 'styled-components'
import { Props } from '@/components/button/index'

const primaryStyle = css`
  background-color: ${({ theme }) => theme.palette.primary};
  border: none;
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
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.texts.light};
  }
`

export const Button = styled.button<Pick<Props, 'variant'>>`
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing.s100} ${({ theme }) => theme.spacing.s200};
  transition: 0.2s background-color, color ease-in;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    border: 1px solid #d8d8d8;
    color: #999;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
      color: #999;
    }
  }
  /* stylelint-disable-next-line order/properties-alphabetical-order */
  ${({ variant }) => (variant === 'primary' ? primaryStyle : secondaryStyle)};
`
