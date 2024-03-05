import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offers from '../Component/Offers/Offers'
import NewCollections from '../Component/NewCOllections/NewCollections'
import NewsLetter from '../Component/NewsLetter/NewsLetter'
import Footer from '../Component/Footer/Footer'

const Shop = () => {
  return (
    <div>
     <Hero></Hero>   
      <Popular></Popular>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop
