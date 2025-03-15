import { PizzaCard } from '../PizzaCard/PizzaCard'
import { useItems } from '../../hooks/api/useItems'
import { Skeleton } from '../Skeleton/Skeleton'
import styles from './styles.module.scss'

interface PizzaBlock {
  category: number
  sort: string
}

export const PizzaBlock = ({ category, sort }: PizzaBlock) => {
  const { items, isLoading } = useItems(category, sort)

  return (
    <div className={styles.pizzaBlock}>
      {isLoading
        ? [...new Array(10)].map((_, index) => <Skeleton key={index} props={index} />)
        : items.map((pizza) => <PizzaCard key={pizza.id} pizza={{ ...pizza }} />)}
    </div>
  )
}
