import { useState } from 'react'
import styles from './styles.module.scss'

export const Sort = () => {
  const sortNames = ['популярности', 'цене', 'алфавиту']
  const [open, setOpen] = useState(false)
  const [chooseSort, setChooseSort] = useState(sortNames[0])

  const handleSort = (index: number) => {
    setChooseSort(sortNames[index])
    setOpen(!open)
  }

  return (
    <div className={styles.sortContainer}>
      <p>Сортировка по:</p>
      <span onClick={() => setOpen(!open)}>{chooseSort}</span>
      {open && (
        <div className={styles.popUp}>
          <ul className={open ? styles.activeDropdownMenu : styles.dropdownMenu}>
            {sortNames.map((sortName, index) => (
              <li onClick={() => handleSort(index)} key={index}>
                {sortName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
