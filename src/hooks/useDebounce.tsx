import { useEffect, useState } from 'react'

interface useDebounce {
  searchValue: string
  delay?: number
}

export const useDebounce = ({ searchValue, delay = 2000 }: useDebounce) => {
  const [debouncedValue, setDebouncedValue] = useState(searchValue)

  useEffect(() => {
    if (searchValue === '') {
      setDebouncedValue('')
      return
    }

    const handler = setTimeout(() => {
      setDebouncedValue(searchValue)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [searchValue, delay])

  return { debouncedValue }
}
