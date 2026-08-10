import React from 'react'
import { Link } from 'react-router-dom'

const PopularRecipes = () => {
  return (
    <section className="py-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="text-center mb-10">

          <p className="text-orange-500 font-semibold text-sm">
            Fresh from the kitchen
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Popular Recipes
          </h2>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Try some of our most loved recipes. Easy to make,
            delicious to eat.
          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">

            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
              alt="Pizza"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <div className="flex items-center justify-between">
                <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
                  Italian
                </span>

                <span className="text-sm">
                  ⭐ 4.9
                </span>
              </div>

              <h3 className="text-xl font-bold mt-4">
                Classic Margherita Pizza
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Fresh tomatoes, mozzarella and basil.
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-sm text-gray-500">
                  ⏱ 30 min
                </span>

                <Link
                  to="/recipes"
                  className="text-orange-500 font-semibold text-sm"
                >
                  View Recipe →
                </Link>

              </div>

            </div>

          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">

            <img
              src="https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80"
              alt="Salad"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <div className="flex items-center justify-between">
                <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full font-semibold">
                  Healthy
                </span>

                <span className="text-sm">
                  ⭐ 4.8
                </span>
              </div>

              <h3 className="text-xl font-bold mt-4">
                Fresh Garden Salad
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Crisp vegetables with a fresh homemade dressing.
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-sm text-gray-500">
                  ⏱ 15 min
                </span>

                <Link
                  to="/recipes"
                  className="text-orange-500 font-semibold text-sm"
                >
                  View Recipe →
                </Link>

              </div>

            </div>

          </div>


          {/* Card 3 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition">

            <img
              src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80"
              alt="Pasta"
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <div className="flex items-center justify-between">
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                  Pasta
                </span>

                <span className="text-sm">
                  ⭐ 4.9
                </span>
              </div>

              <h3 className="text-xl font-bold mt-4">
                Creamy Garlic Pasta
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Creamy, comforting and packed with garlic flavor.
              </p>

              <div className="flex justify-between items-center mt-5">

                <span className="text-sm text-gray-500">
                  ⏱ 25 min
                </span>

                <Link
                  to="/recipes"
                  className="text-orange-500 font-semibold text-sm"
                >
                  View Recipe →
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default PopularRecipes