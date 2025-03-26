import styles from './styles.module.scss'
import { Categories } from '../../Categories/Categories'
import { Sort } from '../../Sort/Sort'
import { PizzaBlock } from '../../PizzaBlock/PizzaBlock'
import { useState } from 'react'
import { Pagination } from 'rsuite'
import 'rsuite/Pagination/styles/index.css'
import { useItems } from '../../../hooks/api/useItems'

interface Home {
  searchValue: string
}

export const Home = ({ searchValue }: Home) => {
  const [category, setCategory] = useState(0)
  const [sort, setSort] = useState({ name: 'популярности', sortProperty: 'rating' })
  const [activePage, setActivePage] = useState(1)

  const page = activePage
  const limitOfCount = 4

  const { items, paginatedItems, isLoading } = useItems({
    category,
    sort,
    searchValue,
    page: activePage - 1,
    limitOfCount,
  })

  return (
    <div>
      <div className={styles.menuOfPizzaSort}>
        <Categories category={category} setCategory={(index) => setCategory(index)} />
        <Sort sort={sort} setSort={setSort} />
      </div>
      <PizzaBlock paginatedItems={paginatedItems} isLoading={isLoading} />
      <div className={styles.pagination}>
        <Pagination
          prev
          last
          next
          first
          size='lg'
          total={items.length}
          limit={limitOfCount}
          activePage={page}
          onChangePage={setActivePage}
        />
      </div>
    </div>
  )
}
