import React, { FC, HTMLAttributes, ReactNode } from 'react'

import * as Styles from './styles'
import { getNicknameInitials } from '@/utils/getNicknameInitials'

export type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'medium' | 'small'
}

const Avatar: FC<Props> = ({ size = 'medium', variant = 'primary', children, ...props }) => {
  return (
    <Styles.Avatar size={size} variant={variant} {...props}>
      {typeof children === 'string' ? getNicknameInitials(children) : children}
    </Styles.Avatar>
  )
}

export default Avatar
