export const Categories = () => {
  const categoriesNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div>
      <ul>
        {categoriesNames.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  )
}
