import React from 'react'
import { ListOfCategory } from './components/ListOfCategory';
import { GlobalStyle } from './GlobalStyles';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <ListOfCategory/>
      <ListOfPhotoCard/>
    </>
    
  )
}

export default App
