import { Header } from '../Components/Header/Header'
import { Cart } from '../Components/pages/Cart/Cart'
import { Home } from '../Components/pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import styles from './styles.module.scss'
import { ErrorPage } from '../Components/pages/Error/ErrorPage'
import { useState } from 'react'

export const App = () => {
  const [searchValue, setSearchValue] = useState('')

  console.log('searchValue HEADER', searchValue)

  return (
    <div className={styles.appContainer}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path='/' element={<Home searchValue={searchValue} />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
