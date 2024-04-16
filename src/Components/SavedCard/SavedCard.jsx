import React from 'react'
import '../SavedCard/SavedCard.css'
const SavedCard = (props) => {
  return (
    <div className='saved-card'>
        <div className="img-box">
          <img src={props.image} alt="" />
        </div>
        <div className="details">
            <h3>Details</h3>
            <p>description</p>
        </div>
    </div>
  )
}

export default SavedCard