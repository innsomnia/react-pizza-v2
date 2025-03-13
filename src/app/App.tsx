import { Header } from '../Components/Header/Header'
import { Cart } from '../Components/pages/Cart/Cart'
import { Home } from '../Components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import styles from './styles.module.scss'
import { ErrorPage } from '../Components/pages/Error/ErrorPage'

export const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
