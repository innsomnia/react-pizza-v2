import styles from './styles.module.scss'

export const Categories = () => {
  const categoriesNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div>
      <ul className={styles.categories}>
        {categoriesNames.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}
