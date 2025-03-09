import axios from 'axios'
import { useEffect, useState } from 'react'
import { PizzasType } from '../../data/pizzas'

export const useItems = () => {
  const [items, setItems] = useState<PizzasType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://6793ae705eae7e5c4d8f8cb2.mockapi.io/items')

        setItems(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return { items }
}
