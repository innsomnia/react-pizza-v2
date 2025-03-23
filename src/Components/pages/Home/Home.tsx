import styles from './styles.module.scss'
import { Categories } from '../../Categories/Categories'
import { Sort } from '../../Sort/Sort'
import { PizzaBlock } from '../../PizzaBlock/PizzaBlock'
import { useState } from 'react'

interface Home {
  searchValue: string
}

export const Home = ({ searchValue }: Home) => {
  const [category, setCategory] = useState(0)
  const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' })

  return (
    <div>
      <div className={styles.menuOfPizzaSort}>
        <Categories category={category} setCategory={(index) => setCategory(index)} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <PizzaBlock searchValue={searchValue} category={category} sort={sort.sortProperty} />
    </div>
  )
}
