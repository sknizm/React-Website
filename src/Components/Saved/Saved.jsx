import React from 'react'
import '../Saved/Saved.css'
import SavedCard from '../SavedCard/SavedCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import all_product from '../Assets/all_product';

const Saved = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='saved'>
         <div className="title-box">
        
        <h3>Saved</h3>
        <h5>See all</h5>
        </div>
    <div className="saved-list">
        <Slider  {...settings}>
          {
            all_product.map((e)=>{
              return <SavedCard image={e.image}/>
            })
          }
        </Slider>
    </div>
    </div>
  )
}

export default Saved