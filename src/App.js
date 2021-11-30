import React from 'react'
import { ListOfCategory } from './components/ListOfCategory';
import { GlobalStyle } from './Styles/GlobalStyles';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';
//import Data from '../db.json'

const App = () => {
  //console.log(Data)
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
