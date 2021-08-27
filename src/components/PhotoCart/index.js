import React, {useEffect, useRef, useState, Fragment}  from 'react';
import { ImgWrapper, Img, Button, Article } from './styles';
import { MdFavoriteBorder } from "react-icons/md";


const DEFAULT_IMAGE= "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard = ({src=DEFAULT_IMAGE, id, likes=10})=>{
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      console.log(isIntersecting)
      if (isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(element.current)
  }, [element])
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
    
              <Button>
                <MdFavoriteBorder size='32px' /> {likes} likes!
              </Button>
            </Fragment>)
          }
      
    </Article>
  )
}
