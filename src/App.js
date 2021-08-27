import React from 'react'
import { ListOfCategory } from './components/ListOfCategory';
import { GlobalStyle } from './GlobalStyles';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Logo/>
      <ListOfCategory/>
      <ListOfPhotoCard/>
    </>
    
  )
}

export default App
