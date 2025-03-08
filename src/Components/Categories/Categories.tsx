import { useState } from 'react'
import styles from './styles.module.scss'

export const Categories = () => {
  const categoriesNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
  const [classIndex, setClassIndex] = useState(0)

  const onClickCategory = (index: number) => {
    setClassIndex(index)
  }

  return (
    <div>
      <ul className={styles.categories}>
        {categoriesNames.map((category, index) => (
          <li
            className={classIndex === index ? styles.active : styles.notActive}
            onClick={() => onClickCategory(index)}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}
