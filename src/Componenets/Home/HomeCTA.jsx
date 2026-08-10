import React from 'react'
import { Link } from 'react-router-dom'

const HomeCTA = () => {
  return (
    <section className="py-14">

      <div className="max-w-4xl mx-auto px-5 text-center">

        <p className="text-orange-500 font-semibold">
          Ready to cook?
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mt-2">
          Your next favorite meal is waiting.
        </h2>

        <p className="text-gray-600 mt-3">
          Explore our collection of delicious recipes today.
        </p>

        <Link
          to="/recipes"
          className="inline-block mt-7 bg-orange-500 text-white px-7 py-3 rounded-full font-bold hover:bg-orange-600 transition"
        >
          Explore Recipes
        </Link>

      </div>

    </section>
  )
}

export default HomeCTA