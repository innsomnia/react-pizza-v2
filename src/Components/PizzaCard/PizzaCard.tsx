import styles from './styles.module.scss'
import { SelectButton } from '../ui/SelectButton/SelectButton'
import { Button } from '../ui/Button/Button'
import { PizzasType } from '../../data/pizzas'
import { useState } from 'react'

interface PizzaCard {
  key: number
  pizza: PizzasType
}

export const PizzaCard = ({ pizza }: PizzaCard) => {
  const { imageUrl, title, types, sizes, price } = pizza
  const pizzaTypes = ['традиционное', 'тонкое']
  const [pizzaCount, setPizzaCount] = useState(0)

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.img} src={imageUrl} alt='Pizza' />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map((type, index) => (
            <SelectButton key={index}>{pizzaTypes[type]}</SelectButton>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <SelectButton key={size}>{size} см.</SelectButton>
          ))}
        </ul>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.price}>от {price} ₽</div>
        <Button pizzaCount={pizzaCount} onClick={() => setPizzaCount((prev) => prev + 1)} variant='countPizzaCard'>
          Добавить
        </Button>
      </div>
    </div>
  )
}
