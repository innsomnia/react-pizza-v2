import React from 'react'
import styles from './styles.module.scss'
import cartImg from '/public/cart123.svg'

interface Button {
  children: React.ReactNode
  onClick?: () => void
  pizzaCount: number
  variant: string
}

export const Button = ({ children, variant, pizzaCount, onClick }: Button) => {
  return (
    <div className={styles.containerBtn}>
      <button onClick={onClick} className={styles.button}>
        {children}
        {variant === 'countCart' ? <img className={styles.img} src={cartImg} alt={'img'} /> : null}
        {pizzaCount > 0 ? (
          <span className={variant === 'countPizzaCard' ? styles.countPizzaCard : styles.countCart}>{pizzaCount}</span>
        ) : null}
      </button>
    </div>
  )
}
