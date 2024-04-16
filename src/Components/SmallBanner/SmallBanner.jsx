import React from 'react'

import '../SmallBanner/SmallBanner.css'
import SmallBannerCard from '../SmallBannerCard/SmallBannerCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import all_product from '../Assets/all_product';

const SmallBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='small-banner'>
      <div className="title-box">
        
      <h3>Banner</h3>
      <h5>See all</h5>
      </div>
      <div className="small-banner-list">
      <Slider  {...settings}>
          {
            all_product.map((e)=>{
              return <SmallBannerCard image={e.image}/>
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default SmallBanner