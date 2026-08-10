import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'Products', path: '/products' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100">

      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-11 h-11 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-105 transition-transform">
              <span className="text-2xl">🍴</span>
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 leading-none">
                Food<span className="text-orange-500">ie</span>
              </h1>

              <p className="text-[10px] text-gray-400 tracking-[0.2em] uppercase mt-1">
                Taste & Love
              </p>
            </div>
          </Link>


          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 w-5 rounded-full bg-orange-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

          </div>


          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden md:flex items-center gap-4">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>


            {/* Favorite */}
            <button
              type="button"
              aria-label="Favorites"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-300 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
            </button>


            {/* CTA */}
            <Link
              to="/recipes"
              className="ml-2 px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-200 hover:bg-orange-600 hover:shadow-orange-300 hover:-translate-y-0.5 transition-all"
            >
              Explore Recipes
            </Link>

          </div>


          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:text-orange-500 hover:border-orange-300 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 py-5">

            <div className="flex flex-col gap-2">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-semibold transition ${
                      isActive
                        ? 'bg-orange-50 text-orange-500'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/recipes"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
              >
                Explore Recipes
              </Link>

            </div>

          </div>
        )}

      </nav>

    </header>
  )
}

export default Navbar