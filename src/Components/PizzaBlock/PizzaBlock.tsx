import { PizzaCard } from '../PizzaCard/PizzaCard'

import { Skeleton } from '../Skeleton/Skeleton'
import styles from './styles.module.scss'
import { PizzasType } from '../../data/pizzas'

interface PizzaBlock {
  paginatedItems: PizzasType[]
  isLoading: boolean
}

export const PizzaBlock = ({ paginatedItems, isLoading }: PizzaBlock) => {
  return (
    <div className={styles.pizzaBlock}>
      {isLoading
        ? [...new Array(10)].map((_, index) => <Skeleton key={index} props={index} />)
        : paginatedItems.map((pizza) => <PizzaCard key={pizza.id} pizza={{ ...pizza }} />)}
      <div></div>
    </div>
  )
}
