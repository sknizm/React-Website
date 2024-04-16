import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import SearchBar from '../../Components/SearchBar/SearchBar'
import '../Home/Home.css'
import Category from '../../Components/Category/Category'
import Saved from '../../Components/Saved/Saved'
import SmallBanner from '../../Components/SmallBanner/SmallBanner'

const Home = () => {
  return (
    <div className='home'>
        <Banner/>
        <SearchBar placeholder={"Search Store, Services, Items..."}/>
        <Category/>
        <Saved/>
        <SmallBanner/>
    </div>
  )
}

export default Home