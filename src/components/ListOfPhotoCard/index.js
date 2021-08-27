import React from 'react';
import { PhotoCard } from '../PhotoCart';

export const ListOfPhotoCard = () =>{
  return (
    <ul>
      {
        [1,2,3,4,5,6,7,8].map(item =>(
          <PhotoCard key={item} />
        ))
      }
    </ul>
  )
}
