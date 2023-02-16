import React  from 'react'
import Product from './ProductPage/Product'
import Slidingproducts from './Slidingproducts'
import Footer from './footer/FooterUI'

function Home() {
  return (
    <>
      <Slidingproducts />
      <Product />
      <Footer />
    </>
  )
}

export default Home;