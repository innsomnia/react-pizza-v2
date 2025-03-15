import styles from './styles.module.scss'

interface Categories {
  category: number
  setCategory: (index: number) => void
}

export const Categories = ({ category, setCategory }: Categories) => {
  const categoriesNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div>
      <ul className={styles.categories}>
        {categoriesNames.map((categoryName, index) => (
          <li
            className={category === index ? styles.active : styles.notActive}
            onClick={() => setCategory(index)}
            key={index}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  )
}
