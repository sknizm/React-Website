import React from 'react'
import '../Category/Category.css'
import data_product from '../Assets/data'
import all_product from '../Assets/all_product'

const Category = () => {
  return (
    <div className='category'>
      <div className="title-box">
      <h1>Category</h1></div>
      <div className="category-list">
        
      {
        all_product.map((e)=>{
          return <img  className='category-icon' src={e.image} alt="" />
        })
      }
      </div>
    </div>
  )
}

export default Category