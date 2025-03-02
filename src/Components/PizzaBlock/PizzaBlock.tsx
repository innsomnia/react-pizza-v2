import { PizzaCard } from '../PizzaCard/PizzaCard'
import styles from './styles.module.scss'
import { pizzas } from '../../data/pizzas'

export const PizzaBlock = () => {
  return (
    <div className={styles.pizzaBlock}>
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={{ ...pizza }} />
      ))}
    </div>
  )
}
