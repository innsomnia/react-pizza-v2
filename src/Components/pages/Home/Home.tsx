import styles from './styles.module.scss'
import { Categories } from '../../Categories/Categories'
import { Sort } from '../../Sort/Sort'
import { PizzaBlock } from '../../PizzaBlock/PizzaBlock'

export const Home = () => {
  return (
    <div>
      <div className={styles.menuOfPizzaSort}>
        <Categories />
        <Sort />
      </div>
      <PizzaBlock />
    </div>
  )
}
