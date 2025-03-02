import React from 'react'
import styles from './styles.module.scss'

interface Button {
  children: React.ReactNode
}

export const Button = ({ children }: Button) => {
  return <button className={styles.button}>{children}</button>
}
