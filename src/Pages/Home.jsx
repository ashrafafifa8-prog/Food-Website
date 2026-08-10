import React from 'react'

import Hero from '../Componenets/Home/Hero'
import Categories from '../Componenets/Home/Categories'
import PopularRecipes from '../Componenets/Home/PopularRecipes'
import FeaturedProducts from '../Componenets/Home/FeaturedProducts'
import WhyChooseUs from '../Componenets/Home/WhyChooseUs'
import HomeCTA from '../Componenets/Home/HomeCTA'

const Home = () => {
  return (
    <div className="bg-[#fffaf5] text-gray-900">

      <Hero />

      <Categories />

      <PopularRecipes />

      <FeaturedProducts />

      <WhyChooseUs />

      <HomeCTA />

    </div>
  )
}

export default Home