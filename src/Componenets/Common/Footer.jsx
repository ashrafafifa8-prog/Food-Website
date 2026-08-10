import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 py-9">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center">
                <span className="text-lg">🍴</span>
              </div>

              <h2 className="text-xl font-bold">
                Food<span className="text-orange-500">ie</span>
              </h2>
            </Link>

            <p className="text-gray-400 text-xs leading-5 mt-3 max-w-xs">
              Discover delicious recipes and bring more flavor
              to your everyday meals.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2 mt-4">

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-orange-500 transition"
              >
                f
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-orange-500 transition"
              >
                ◎
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-orange-500 transition"
              >
                ▶
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-orange-500 transition"
              >
                ♪
              </a>

            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2.5 text-xs">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/recipes"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Recipes
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  About Us
                </a>
              </li>

            </ul>
          </div>


          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Explore
            </h3>

            <ul className="space-y-2.5 text-xs">

              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  Popular Recipes
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  Healthy Food
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  Quick Meals
                </a>
              </li>

              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition">
                  Dinner Ideas
                </a>
              </li>

            </ul>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-xs">

              <p className="text-gray-400">
                ✉ hello@foodie.com
              </p>

              <p className="text-gray-400">
                ☎ +1 234 567 890
              </p>

              <p className="text-gray-400">
                📍 Food Street, Your City
              </p>

            </div>
          </div>

        </div>


        {/* Newsletter - Compact */}
        <div className="mt-8 pt-6 border-t border-white/10">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <div>
              <h3 className="text-sm font-semibold">
                Get delicious recipes in your inbox 🍳
              </h3>

              <p className="text-gray-500 text-xs mt-1">
                Fresh recipes and food tips every week.
              </p>
            </div>

            <div className="flex w-full sm:w-auto">

              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-52 px-4 py-2.5 text-xs rounded-l-lg bg-white text-gray-800 outline-none"
              />

              <button
                className="px-4 py-2.5 rounded-r-lg bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">

          <p className="text-gray-500 text-[11px]">
            © 2026 Foodie. All rights reserved.
          </p>

          <div className="flex gap-4 text-[11px]">

            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-orange-500 transition"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer