import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-orange-500 font-semibold text-sm">
              Shop your favorites
            </p>

            <h2 className="text-3xl font-bold mt-1">
              Featured Products
            </h2>
          </div>

          <Link
            to="/products"
            className="text-orange-500 font-semibold text-sm"
          >
            View all products →
          </Link>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            {
              name: 'Fresh Vegetables',
              desc: 'Fresh & organic',
              price: '$12.99',
              image:
                'https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Dark Chocolate',
              desc: 'Premium quality',
              price: '$8.99',
              image:
                'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Extra Virgin Olive Oil',
              desc: 'Rich & authentic',
              price: '$15.50',
              image:
                'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=600&q=80',
            },
            {
              name: 'Premium Spices',
              desc: 'Rich natural flavor',
              price: '$9.50',
              image:
                'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80',
            },
          ].map((product, index) => (

            <div
              key={index}
              className="border border-gray-100 rounded-2xl p-4 bg-[#fffaf5] hover:shadow-lg transition"
            >

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-xl"
              />

              <h3 className="font-bold mt-4">
                {product.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {product.desc}
              </p>

              <div className="flex justify-between items-center mt-4">

                <span className="font-bold text-orange-500">
                  {product.price}
                </span>

                <button className="w-9 h-9 rounded-full bg-orange-500 text-white hover:bg-orange-600">
                  +
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default FeaturedProducts