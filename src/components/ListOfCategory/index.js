import React from 'react';
import { Category } from '../Category';
import { Lista, Item } from './styles';

export const ListOfCategory = () =>{

  return (
    <Lista>
      {
        [1,2,3,4,1,2,3,4].map((category, index) => (
          <Item key={index} ><Category /> </Item>
        ))
      }
    </Lista>
  )
};
