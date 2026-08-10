import React from 'react'
import Navbar from '../Componenets/Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Componenets/Common/Footer'

export const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
export default RootLayout