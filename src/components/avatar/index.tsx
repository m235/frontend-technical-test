import React, { FC, HTMLAttributes, ReactNode } from 'react'

import * as Styles from './styles'
import { getNicknameInitials } from '@/utils/getNicknameInitials'

export enum Variant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum Size {
  MEDIUM = 'medium',
  SMALL = 'small',
}

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode
  variant?: Variant
  size?: Size
}

const Avatar: FC<Props> = ({ size = Size.MEDIUM, variant = Variant.PRIMARY, children, ...props }) => {
  return (
    <Styles.Avatar size={size} variant={variant} {...props}>
      {typeof children === 'string' ? getNicknameInitials(children) : children}
    </Styles.Avatar>
  )
}

export default Avatar
