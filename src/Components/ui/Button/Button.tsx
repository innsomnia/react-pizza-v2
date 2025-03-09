import React from 'react'
import styles from './styles.module.scss'
import cartImg from '/cart123.svg'

interface Button {
  children?: React.ReactNode
  addPizzaCart?: () => void
  removePizzaCart?: (e: React.MouseEvent<HTMLSpanElement>) => void
  pizzaCount?: number
  variant?: string
}

export const Button = ({ children, variant, pizzaCount = 0, addPizzaCart, removePizzaCart }: Button) => {
  return (
    <div className={styles.containerBtn}>
      <button onClick={addPizzaCart} className={styles.button}>
        {pizzaCount > 0 ? (
          <span onClick={removePizzaCart} className={styles.countDecrement}>
            -
          </span>
        ) : null}
        {children}
        {variant === 'countCart' ? <img className={styles.img} src={cartImg} alt={'img'} /> : null}
        {pizzaCount > 0 ? (
          <span className={variant === 'countPizzaCard' ? styles.countPizzaCard : styles.countCart}>{pizzaCount}</span>
        ) : null}
      </button>
    </div>
  )
}
