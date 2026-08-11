import React, { useEffect, useState } from 'react'

const Products = () => {

  const [products, setProducts] = useState([])

  // Fetch all products
  const fetchAllProducts = async () => {
    try {

      const response = await fetch(
        'https://dummyjson.com/products'
      )

      const data = await response.json()

      setProducts(data.products)

    } catch (error) {

      console.error('Error fetching products:', error)

    }
  }

  // Call API when page loads
  useEffect(() => {
    fetchAllProducts()
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
            All Products
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-6">
            Explore our collection of quality food products and
            discover everything you need for helo 
          </p>

          <div className="flex justify-center mt-5">
            <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Product Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover"
              />

              {/* Product Info */}
              <div className="p-5">

                <p className="text-xs text-orange-500 font-semibold uppercase">
                  {product.category}
                </p>

                <h2 className="text-lg font-bold text-gray-900 mt-2 line-clamp-1">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-xl font-bold text-orange-500">
                    ${product.price}
                  </span>

                  <button className="bg-orange-500 text-white w-9 h-9 rounded-full hover:bg-orange-600 transition">
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  )
}

export default Products