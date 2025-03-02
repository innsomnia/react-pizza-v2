import React from 'react'
import styles from './styles.module.scss'

interface SelectButton {
  children: React.ReactNode
  key: number
}

export const SelectButton = ({ children }: SelectButton) => {
  return <button className={styles.button}>{children}</button>
}
