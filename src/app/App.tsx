import { Categories } from '../Components/Categories/Categories'
import { Header } from '../Components/Header/Header'
import styles from './styles.module.scss'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Categories />
    </div>
  )
}

export default App
