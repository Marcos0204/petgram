import React, {useState, useEffect} from 'react';
import { Category } from '../Category';
import { Lista, Item } from './styles';

export const ListOfCategory = () =>{
  const [categories, setCategories] = useState([
    {
      "id": 1,
      "name": "cats",
      "emoji": "🐱",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg",
      "path": "/photos/cats"
    },
    {
      "id": 2,
      "name": "dogs",
      "emoji": "🐶",
      "cover": "https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg",
      "path": "/photos/dogs"
    },
  ])

  useEffect(function () {
    window.fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  return (
    <Lista>
      {
        categories.map((category) => (
          <Item key={category.id} ><Category {...category} /> </Item>
        ))
      }
    </Lista>
  )
};
