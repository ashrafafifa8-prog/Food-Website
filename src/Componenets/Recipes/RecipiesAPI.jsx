import React, { useEffect, useState } from 'react'

const Recipes = () => {

  const [recipes, setRecipes] = useState([])

  // Fetch all recipes
  const fetchAllRecipes = async () => {
    try {

      const response = await fetch(
        'https://dummyjson.com/recipes'
      )

      const data = await response.json()

      setRecipes(data.recipes)

    } catch (error) {

      console.error('Error fetching recipes:', error)

    }
  }

  // API call when page loads
  useEffect(() => {
    fetchAllRecipes()
  }, [])


  return (
    <div className="min-h-screen bg-[#fffaf5]">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-8">

        <div className="text-center">

          <p className="text-orange-500 text-sm font-semibold tracking-wide uppercase">
            Fresh & Delicious
          </p>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-2">
            All Recipes
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-6">
            Discover delicious recipes, easy meals and inspiring
            dishes for every occasion.
          </p>

          <div className="flex justify-center mt-5">
            <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
          </div>

        </div>

      </section>


      {/* ================= RECIPES ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {recipes.map((recipe) => (

            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-56 object-cover"
              />

              {/* Recipe Info */}
              <div className="p-5">

                <div className="flex items-center justify-between">

                  <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
                    {recipe.cuisine}
                  </span>

                  <span className="text-sm text-gray-600">
                    ⭐ {recipe.rating}
                  </span>

                </div>


                <h2 className="text-xl font-bold text-gray-900 mt-4">
                  {recipe.name}
                </h2>


                <p className="text-sm text-gray-500 mt-2">
                  {recipe.mealType?.join(', ')}
                </p>


                <div className="flex items-center justify-between mt-5">

                  <span className="text-sm text-gray-500">
                    ⏱ {recipe.cookTimeMinutes} min
                  </span>

                  <span className="text-sm font-semibold text-orange-500">
                    {recipe.difficulty}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Recipes