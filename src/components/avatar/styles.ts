import styled from 'styled-components'

import { Size, Variant } from '@/components/avatar'

export const Avatar = styled.div<{ variant: Variant; size: Size }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: ${({ size }) => (size === Size.SMALL ? '1rem' : '1.25rem')};
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  width: ${({ size }) => (size === Size.SMALL ? '48px' : '64px')};
  height: ${({ size }) => (size === Size.SMALL ? '48px' : '64px')};
  background-color: ${({ variant, theme }) => theme.palette[variant]};
  color: #ffffff;
`
