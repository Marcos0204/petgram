import React, {useEffect, useRef, useState, Fragment}  from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";


const DEFAULT_IMAGE= "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({src=DEFAULT_IMAGE, id, likes=0})=>{
  const [show, setShow] = useState(false);
  const key = `like-${id}`
  const [liked, setLiked]= useState(() =>{
    try{
      const like = window.localStorage.getItem(key);
      return like
    }catch (e){
    }
  } );
  const element = useRef(null)

  console.log(liked)
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    })
  }, [element])
  const Icon = !liked ?  MdFavoriteBorder : MdFavorite;

  const setLocalStorage= value =>{
    try{
      window.localStorage.setItem(key, value);
      setLiked(value)
    } catch (e) {
    }
  }

  return (
    <Article ref={element}>
      
          {
            
            show && (
            <Fragment>
              <a href={`/detail/${id}`}>
                <ImgWrapper>
                  <Img src={src} />
                </ImgWrapper>
              </a>
    
              <Button onClick={()=> setLocalStorage(!liked) }>
                <Icon size='32px' /> {likes} likes!
              </Button>
            </Fragment>)
          }
      
    </Article>
  )
}
