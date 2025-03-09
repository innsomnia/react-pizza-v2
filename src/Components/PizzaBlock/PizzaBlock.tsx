import { PizzaCard } from '../PizzaCard/PizzaCard'
import styles from './styles.module.scss'
// import { pizzas } from '../../data/pizzas'
import { useItems } from '../../hooks/api/useItems'

export const PizzaBlock = () => {
  const { items } = useItems()

  return (
    <div className={styles.pizzaBlock}>
      {items.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={{ ...pizza }} />
      ))}
    </div>
  )
}
