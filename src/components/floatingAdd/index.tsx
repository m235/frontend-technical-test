import React, { ButtonHTMLAttributes, FC, forwardRef } from 'react'

import * as Styles from './styles'

export type Props = ButtonHTMLAttributes<HTMLButtonElement>

const FloatingAdd = forwardRef<HTMLButtonElement, Props>(({ ...buttonProps }, ref) => {
  return (
    <Styles.FloatingAdd aria-label="add" {...buttonProps} ref={ref}>
      <i className="fa-solid fa-plus" />
    </Styles.FloatingAdd>
  )
})
FloatingAdd.displayName = 'FloatingAdd'

export default FloatingAdd
