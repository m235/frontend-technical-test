import styled from 'styled-components'

import type { Props } from '@/components/avatar'

export const Avatar = styled.div<Pick<Props, 'size' | 'variant'>>`
  align-items: center;
  background-color: ${({ variant, theme }) => theme.palette[variant]};
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.texts.light};
  display: flex;
  flex-shrink: 0;
  font-size: ${({ size }) => (size === 'small' ? '1rem' : '1.25rem')};
  height: ${({ size }) => (size === 'small' ? '48px' : '64px')};
  justify-content: center;
  line-height: 1;
  overflow: hidden;
  position: relative;
  user-select: none;
  width: ${({ size }) => (size === 'small' ? '48px' : '64px')};
`
