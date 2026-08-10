import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './Layout/RootLayout'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Recipes from './Pages/Recipes'
import ScrollToTop from './Componenets/Common/ScrollToTop'

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="recipes" element={<Recipes />} />
        </Route>
      </Routes>
    </>
  )
}

export default App