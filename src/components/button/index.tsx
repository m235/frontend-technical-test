import React, { FC } from 'react'

import * as Styles from './styles'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

const Button: FC<Props> = ({ children, variant = Variant.PRIMARY, ...buttonProps }) => {
  return (
    <Styles.Button variant={variant} {...buttonProps}>
      {children}
    </Styles.Button>
  )
}

export default Button
