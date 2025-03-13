import { Link } from 'react-router-dom'
import { Button } from '../../ui/Button/Button'
import styles from './styles.module.scss'

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>Такой страницы нет</h1>
      <span>Нажмите кнопку ниже, чтобы перейти на главную страницу</span>

      <Link to={'/'}>
        <Button>Перейти</Button>
      </Link>
    </div>
  )
}
