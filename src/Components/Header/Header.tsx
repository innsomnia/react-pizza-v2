import { Link } from 'react-router-dom'
import { Button } from '../ui/Button/Button'
import styles from './styles.module.scss'

import appIcon from '/pizzaFavicon.png'

export const Header = () => {
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

      <Link to={'/cart'}>
        <Button variant='countCart'>Корзина</Button>
      </Link>
    </div>
  )
}
