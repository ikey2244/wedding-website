import { Link } from "gatsby"
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks';
import { Burger, Menu } from '../components';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  const isActive = ({isCurrent, href}) => {
    return isCurrent ? { className: "border-b-2 border-red-500 pb-1 font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6" } : null
  }

  
  return (
    <header className="absolute top-0 right-0 left-0">
      <div className="overflow-hidden relative h-screen">
        <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap px-6 mt-8 absolute top-0 right-0 left-0 ">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-body font-light text-2xl tracking-tight">
              <Link to="/location">
                Ike & KR
                <br/>
                <span className="text-sm block">#myweberhalf</span>
              </Link>
            </span>
          </div>
          <div className="w-full block flex-end hidden md:flex md:items-center md:w-auto">
            <div className="text-md md:flex-grow">
              <Link getProps={isActive} to="/rsvp" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6 pointer">
                RSVP
              </Link>
              <Link getProps={isActive} to="/our-story" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6 pointer">
                Our Story
              </Link>
              <Link getProps={isActive} to="/location" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6 pointer">
                Location
              </Link>
              <Link getProps={isActive} to="/gallery" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6 pointer">
                Gallery
              </Link>
              <Link getProps={isActive} to="/registry" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6 pointer">
                Registry
              </Link>
              <Link getProps={isActive} to="/accommodations" className="font-body block md:inline-block md:mt-0 text-white hover:text-white pointer">
                Accommodations
              </Link>
            </div>
          </div>
        </nav>
        <div className="block md:hidden">
          <ThemeProvider theme={theme}>
            <div ref={node}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} isActive={isActive} />
            </div>
          </ThemeProvider>
        </div>
      </div>
    </header>
  )

}

export default Header
