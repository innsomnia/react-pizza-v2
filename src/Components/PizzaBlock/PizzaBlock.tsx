import { PizzaCard } from '../PizzaCard/PizzaCard'
import styles from './styles.module.scss'
import { useItems } from '../../hooks/api/useItems'

import { Skeleton } from '../Skeleton/Skeleton'

export const PizzaBlock = () => {
  const { items, isLoading } = useItems()

  return (
    <div className={styles.pizzaBlock}>
      {isLoading
        ? [...new Array(10)].map((_, index) => <Skeleton key={index} props={index} />)
        : items.map((pizza) => <PizzaCard key={pizza.id} pizza={{ ...pizza }} />)}
    </div>
  )
}
