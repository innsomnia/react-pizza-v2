import { useState } from 'react'
import styles from './styles.module.scss'

interface Sort {
  sort: { name: string; sortProperty: string }
  setSort: (newSort: { name: string; sortProperty: string }) => void
}

export const Sort = ({ sort, setSort }: Sort) => {
  const sortTypes = [
    { name: 'популярности', sortProperty: 'rating' },
    { name: 'цене', sortProperty: 'price' },
    { name: 'алфавиту', sortProperty: 'title' },
  ]
  const [open, setOpen] = useState(false)

  const handleSort = (index: number) => {
    setSort(sortTypes[index])
    setOpen(!open)
  }

  return (
    <div className={styles.sortContainer}>
      <p>Сортировка по:</p>
      <span onClick={() => setOpen(!open)}>{sort.name}</span>
      {open && (
        <div className={styles.popUp}>
          <ul className={open ? styles.activeDropdownMenu : styles.dropdownMenu}>
            {sortTypes.map((sort, index) => (
              <li onClick={() => handleSort(index)} key={index}>
                {sort.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
