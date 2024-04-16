import React from 'react'
import { BsSearch } from "react-icons/bs"
import '../SearchBar/SearchBar.css'

const SearchBar = (props) => {
  return (
    <div className='search'>
        <div className="search-box">
            
            <BsSearch className='icon'/>
        <input type="text" placeholder={props.placeholder} />
        </div>

    </div>
  )
}

export default SearchBar