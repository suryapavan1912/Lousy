import React from 'react'
import Slider from './Slider/Slider'
import './Home.scss'
import Featuredproducts from './Featuredproducts/Featuredproducts'
import Gridbox from './Gridbox/Gridbox'
import Contact from './Contact/Contact'

function Home() {
  return (
    <div>
    <Slider />
    <Featuredproducts type="featured" />
    <Gridbox />
    <Featuredproducts type="trending" />
    <Contact />
    </div>
  )
}

export default Home