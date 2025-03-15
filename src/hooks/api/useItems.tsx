import axios from 'axios'
import { useEffect, useState } from 'react'
import { PizzasType } from '../../data/pizzas'

export const useItems = (category: number, sort: string) => {
  const [items, setItems] = useState<PizzasType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const categoryParam = category ? `category=${category}` : ''
  const sortParam = `&sortBy=${sort}&order=asc`

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await axios.get(
          `https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items?${categoryParam}${sortParam}`
        )
        setItems(response.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)

        console.error(error)
      }
    }
    fetchData()
  }, [categoryParam, sortParam])

  return { items, isLoading }
}
