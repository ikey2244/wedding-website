import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="absolute top-0 right-0 left-0">
    <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap px-6 mt-8 absolute top-0 right-0 left-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-body font-light text-2xl tracking-tight">Ike & KR</span>
      </div>
      <div className="block md:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-end md:flex md:items-center md:w-auto">
        <div className="text-md md:flex-grow">
          <Link to="/rsvp" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
            RSVP
          </Link>
          <Link to="/home" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
            Our Story
          </Link>
          <Link to="/" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
            Location
          </Link>
          <Link to="/" className="font-body block md:inline-block md:mt-0 text-white hover:text-white">
            Registry
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
