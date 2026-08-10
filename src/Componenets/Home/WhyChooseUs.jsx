import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold text-sm">
            Why Foodie?
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Everything you need in one place
          </h2>

        </div>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-7 text-center shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              🍳
            </div>

            <h3 className="font-bold text-lg mt-5">
              Easy Recipes
            </h3>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              Simple recipes with clear instructions for everyday cooking.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-7 text-center shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              🥬
            </div>

            <h3 className="font-bold text-lg mt-5">
              Fresh Ingredients
            </h3>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              Discover fresh food ideas and quality ingredients.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-7 text-center shadow-sm">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              ❤️
            </div>

            <h3 className="font-bold text-lg mt-5">
              Made With Love
            </h3>

            <p className="text-gray-500 text-sm leading-6 mt-2">
              A place created for people who genuinely love good food.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default WhyChooseUs