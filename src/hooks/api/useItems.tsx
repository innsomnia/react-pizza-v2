import axios from 'axios'
import { useEffect, useState } from 'react'
import { PizzasType } from '../../data/pizzas'
import { useDebounce } from '../useDebounce'

interface useItems {
  category: number
  sort: string
  searchValue: string
}

export const useItems = ({ category, sort, searchValue }: useItems) => {
  const [items, setItems] = useState<PizzasType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  console.log('searchValue', searchValue)

  const { debouncedValue } = useDebounce({ searchValue: searchValue })

  const categoryParam = category ? `category=${category}` : ''
  const sortParam = `&sortBy=${sort}&order=asc`
  const searchParam = debouncedValue ? `&search=${debouncedValue}` : ''

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const URL = 'https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items?'

        const response = await axios.get(`${URL}${categoryParam}${sortParam}${searchParam}`)
        setItems(response.data)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [categoryParam, sortParam, searchParam])

  return { items, isLoading }
}
