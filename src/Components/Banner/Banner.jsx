import React, { useState } from 'react'
import '../Banner/Banner.css'
import '../Assets/data'
import data_product from '../Assets/data'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import all_product from '../Assets/all_product'
const Banner = () => {
const [slide,setSlide] = useState(0);
const nextSlide = () =>{
  setSlide( slide === all_product.length-1?0 : slide+1)
}
const prevSlide = () =>{
  setSlide(slide === 0? all_product.length-1 : slide-1)
}
  return (
    <div className='banner'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={()=>nextSlide()}/>
      {
        all_product.map((e , idx)=>{
          return <div className={slide===idx?"slider" :"slider hidden"} style={{backgroundImage :`url(${e.image})`}}>
            <h1>{e.name}</h1>
          </div>
        })
      }
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={()=>prevSlide()}/>
        </div>
  )
}

export default Banner