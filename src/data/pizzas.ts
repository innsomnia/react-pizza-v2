export type PizzasType = {
  id: number
  imageUrl: string
  title: string
  types: number[]
  sizes: number[]
  price: number
  category: number
  rating: number
}

export const pizzas: PizzasType[] = [
  {
    id: 0,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif',
    title: 'Пепперони Фреш с перцем',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 1,
    rating: 4,
  },
  {
    id: 1,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.avif',
    title: 'Сырная',
    types: [0],
    sizes: [26, 40],
    price: 245,
    category: 1,
    rating: 6,
  },
  {
    id: 2,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6110059795842d40396bcf1e73.avif',
    title: 'Цыпленок барбекю',
    types: [0],
    sizes: [26, 40],
    price: 295,
    category: 1,
    rating: 4,
  },
  {
    id: 3,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d614cbe0530b7234b6d7a6e5f8e.avif',
    title: 'Кисло-сладкий цыпленок',
    types: [1],
    sizes: [26, 30, 40],
    price: 275,
    category: 2,
    rating: 2,
  },
  {
    id: 4,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif',
    title: 'Чизбургер-пицца',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: 3,
    rating: 8,
  },
  {
    id: 5,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
    title: 'Крэйзи пепперони',
    types: [0],
    sizes: [30, 40],
    price: 580,
    category: 2,
    rating: 2,
  },
  {
    id: 6,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d610a62d78598406363a9a8ad65.avif',
    title: 'Пепперони',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 675,
    category: 1,
    rating: 9,
  },
  {
    id: 7,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6105ef6690b86fbde6150b5b0c.avif',
    title: 'Маргарита',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 450,
    category: 4,
    rating: 10,
  },
  {
    id: 8,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d611adf5aad898b8b651186e023.avif',
    title: 'Четыре сезона',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 395,
    category: 5,
    rating: 10,
  },
  {
    id: 9,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61546d8483a61a0bbaa7adcc78.avif',
    title: 'Овощи и грибы 🌱',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 285,
    category: 5,
    rating: 7,
  },
  {
    id: 10,
    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61698827ee9b8db6d0aec53410.avif',
    title: 'Чизбургер-пицца',
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 415,
    category: 3,
    rating: 8,
  },
]
