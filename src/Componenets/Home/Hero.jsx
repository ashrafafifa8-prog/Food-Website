import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Hero Content */}
        <div>

          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            <span>🍳</span>
            Fresh taste. Simple recipes.
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-5">
            Cook something
            <span className="text-orange-500"> delicious </span>
            today.
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-7 mt-5 max-w-xl">
            Discover delicious recipes, fresh food ideas and useful
            products that make cooking easier and more enjoyable.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to="/recipes"
              className="bg-orange-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200"
            >
              Explore Recipes →
            </Link>

            <Link
              to="/products"
              className="border border-gray-300 bg-white px-7 py-3 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 transition"
            >
              View Products
            </Link>

          </div>

          <div className="flex flex-wrap gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold">500+</h3>
              <p className="text-sm text-gray-500">Recipes</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm text-gray-500">Food Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">4.9★</h3>
              <p className="text-sm text-gray-500">User Rating</p>
            </div>

          </div>

        </div>


        {/* Hero Image */}
        <div className="relative">

          <div className="absolute -top-5 -right-3 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-60"></div>

          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=85"
            alt="Healthy delicious food"
            className="relative w-full h-[380px] sm:h-[450px] object-cover rounded-[35px] shadow-2xl"
          />

          <div className="absolute left-4 bottom-5 sm:left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-orange-100 flex items-center justify-center">
              ❤️
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Loved by foodies
              </p>

              <p className="font-bold text-sm">
                10k+ Happy Users
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero