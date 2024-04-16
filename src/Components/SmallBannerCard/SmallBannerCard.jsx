import React from 'react'
import '../SmallBannerCard/SmallBannerCard.css'
const SmallBannerCard = (props) => {
  return (
    <div className='small-banner-card' style={{backgroundImage :`url(${props.image})`}}>
    
</div>
  )
}

export default SmallBannerCard