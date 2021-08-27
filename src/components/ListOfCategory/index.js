import React from 'react';
import { Category } from '../Category';
import { Lista, Item } from './styles';
import information from '../../utils/information';

export const ListOfCategory = () =>{
  const {categories} =information;

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
