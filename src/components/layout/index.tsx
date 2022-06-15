import React, { FC, ReactNode } from 'react'

import Avatar from '@/components/avatar'

import * as Styles from './styles'

interface Props {
  children?: ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Styles.Container>
      <Styles.Menu>
        <Avatar size="small" variant="secondary">
          ML
        </Avatar>
      </Styles.Menu>
      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}

export default Layout
