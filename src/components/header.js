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
  return (
    <header className="absolute top-0 right-0 left-0">
      <div className="block md:hidden">
        <ThemeProvider theme={theme}>
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </div>
        </ThemeProvider>
      </div>
      <nav className="max-w-5xl mx-auto flex items-center justify-between flex-wrap px-6 mt-8 absolute top-0 right-0 left-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-body font-light text-2xl tracking-tight">Ike & KR</span>
        </div>
        <div className="w-full block flex-end hidden md:flex md:items-center md:w-auto">
          <div className="text-md md:flex-grow">
            <Link to="/rsvp" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
              RSVP
            </Link>
            <Link to="/our-story" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
              Our Story
            </Link>
            <Link to="/location" className="font-body block md:inline-block md:mt-0 text-white hover:text-white mr-6">
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

}

export default Header
