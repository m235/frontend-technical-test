import React, { ButtonHTMLAttributes, FC } from 'react'

import * as Styles from './styles'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

const Button: FC<Props> = ({ children, variant = 'primary', ...buttonProps }) => {
  return (
    <Styles.Button variant={variant} {...buttonProps}>
      {children}
    </Styles.Button>
  )
}

export default Button
