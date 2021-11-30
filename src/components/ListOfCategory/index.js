import React, {useState, useEffect} from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';
import Data from '../../../db.json'

const useCategoriDate= () =>{
  const [categories, setCategories] = useState([]);
  const [ loading, setLoading ] = useState(false)
  useEffect(function () {
    setLoading(true)
    setCategories(Data.categories)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
    // setLoading(true)
    // // window.fetch('http://localhost:3000/categories')
    // //   .then(res => res.json())
    // //   .then(response => {
    // //     setCategories(response)
    // //     setLoading(false)
    // //   })
  }, [])
  return {categories, loading}
}

export const ListOfCategory = () =>{
  const {categories, loading} = useCategoriDate();
  const [showFixed, setShowFixed] = useState(false)

  
  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed} >
      {
        loading ?(<Item key={'loding'}> <Category/> </Item>)
        : (
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        )
        
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
     
  )
};
