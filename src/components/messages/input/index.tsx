import React, { FC, TextareaHTMLAttributes } from 'react'

import * as Styles from './styles'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>

const Input: FC<Props> = ({ ...textAreaProps }) => {
  return <Styles.Input {...textAreaProps} />
}

export default Input
