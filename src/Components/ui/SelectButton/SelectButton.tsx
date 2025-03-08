import React from 'react'

interface SelectButton {
  children: React.ReactNode
  onClick?: () => void
  key: number
  className: string
}

export const SelectButton = ({ children, onClick, className }: SelectButton) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}
