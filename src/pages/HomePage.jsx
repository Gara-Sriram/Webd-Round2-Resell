import React, { useState } from 'react'
import NavBar from '../components/navbar'
import Slide from '../components/Slide'
import ProductList from '../components/ProductList'
import Footer from '../components/footer'

const HomePage = () => {
 

  return (
    <div>
      <NavBar />
      <Slide />
      <ProductList />
      <Footer />


     
    </div>
  )
}

export default HomePage
