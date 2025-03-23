import { Link } from 'react-router-dom'
import { Button } from '../ui/Button/Button'
import styles from './styles.module.scss'
import searchIcon from './assets/211818_search_icon.svg'
import removeIcon from './assets/cartRemove.svg'
import appIcon from '/pizzaFavicon.png'

interface Header {
  searchValue: string
  setSearchValue: (event: string) => void
}

export const Header = ({ searchValue, setSearchValue }: Header) => {
  return (
    <div className={styles.container}>
      <Link to={'/'}>
        <div className={styles.containerTitle}>
          <img src={appIcon} alt='image' />
          <div>
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>

      <div className={styles.inputContainer}>
        <img className={styles.searchIcon} src={searchIcon} alt='img' />
        <input
          className={styles.myInput}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          type='text'
          placeholder='Поиск пиццы...'
        />

        <img onClick={() => setSearchValue('')} className={styles.removeIcon} src={removeIcon} alt='img' />
      </div>

      <Link to={'/cart'}>
        <Button variant='countCart'>Корзина</Button>
      </Link>
    </div>
  )
}
