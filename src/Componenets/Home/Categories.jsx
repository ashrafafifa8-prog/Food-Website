import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <section className="bg-white py-14">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-orange-500 font-semibold text-sm">
              Explore our collection
            </p>

            <h2 className="text-3xl font-bold mt-1">
              What are you craving?
            </h2>
          </div>

          <Link
            to="/recipes"
            className="text-orange-500 font-semibold text-sm hover:text-orange-600"
          >
            View all →
          </Link>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <Link
            to="/recipes"
            className="bg-[#fff7ed] rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-3">🍕</div>
            <h3 className="font-bold">Pizza</h3>
            <p className="text-xs text-gray-500 mt-1">80+ Recipes</p>
          </Link>


          <Link
            to="/recipes"
            className="bg-[#fff7ed] rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-3">🍔</div>
            <h3 className="font-bold">Burgers</h3>
            <p className="text-xs text-gray-500 mt-1">60+ Recipes</p>
          </Link>


          <Link
            to="/recipes"
            className="bg-[#fff7ed] rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-3">🥗</div>
            <h3 className="font-bold">Healthy</h3>
            <p className="text-xs text-gray-500 mt-1">100+ Recipes</p>
          </Link>


          <Link
            to="/recipes"
            className="bg-[#fff7ed] rounded-2xl p-5 text-center hover:-translate-y-1 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-3">🍰</div>
            <h3 className="font-bold">Desserts</h3>
            <p className="text-xs text-gray-500 mt-1">90+ Recipes</p>
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Categories