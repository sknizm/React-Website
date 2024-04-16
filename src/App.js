import React from 'react'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App