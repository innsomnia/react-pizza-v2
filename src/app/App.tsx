import { Categories } from '../Components/Categories/Categories'
import { Header } from '../Components/Header/Header'
import styles from './styles.module.scss'
import { Sort } from './../Components/Sort/Sort'
import { PizzaBlock } from '../Components/PizzaBlock/PizzaBlock'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <div className={styles.menuOfPizzaSort}>
        <Categories />
        <Sort />
      </div>
      <PizzaBlock />
    </div>
  )
}

export default App
