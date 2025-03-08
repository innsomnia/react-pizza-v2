import styles from './styles.module.scss'
import classes from '../ui/SelectButton/styles.module.scss'
import { SelectButton } from '../ui/SelectButton/SelectButton'
import { Button } from '../ui/Button/Button'
import { PizzasType } from '../../data/pizzas'
import React, { useState } from 'react'

interface PizzaCard {
  key: number
  pizza: PizzasType
}

export const PizzaCard = ({ pizza }: PizzaCard) => {
  const { imageUrl, title, types, sizes, price } = pizza
  const pizzaTypes = ['традиционное', 'тонкое']
  const [pizzaCount, setPizzaCount] = useState(0)
  const [activePizzaType, setActivePizzaType] = useState(types[0])
  const [activePizzaSize, setActivePizzaSize] = useState(sizes[0])

  const addPizzaCart = () => {
    setPizzaCount((prev) => prev + 1)
  }

  const removePizzaCart = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setPizzaCount((prev) => (pizzaCount > 0 ? prev - 1 : 0))
  }

  return (
    <div className={styles.pizzaBlock}>
      <img className={styles.img} src={imageUrl} alt='Pizza' />
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.selector}>
        <ul>
          {types.map((type, index) => (
            <SelectButton
              className={activePizzaType === type ? classes.focused : classes.button}
              onClick={() => setActivePizzaType(index)}
              key={index}>
              {pizzaTypes[index]}
            </SelectButton>
          ))}
        </ul>
        <ul>
          {sizes.map((size) => (
            <SelectButton
              onClick={() => setActivePizzaSize(size)}
              className={activePizzaSize === size ? classes.focused : classes.button}
              key={size}>
              {size} см.
            </SelectButton>
          ))}
        </ul>
      </div>

      <div className={styles.bottomBlock}>
        <div className={styles.price}>от {price} ₽</div>
        <Button
          pizzaCount={pizzaCount}
          removePizzaCart={(e) => removePizzaCart(e)}
          addPizzaCart={() => addPizzaCart()}
          variant='countPizzaCard'>
          Добавить
        </Button>
      </div>
    </div>
  )
}
