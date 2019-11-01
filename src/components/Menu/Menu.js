  
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "gatsby"

const Menu = ({ open, setOpen, ...props}) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  const closeMenu = () => {
    setOpen(false)
  }

  
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link className="font-body" to="/rsvp" tabIndex={tabIndex} onClick={closeMenu}>
        RSVP
      </Link>
      <Link className="font-body" to="/our-story" tabIndex={tabIndex} onClick={closeMenu}>
        Our Story
      </Link>
      <Link className="font-body" to="/location" tabIndex={tabIndex} onClick={closeMenu}>
        Location
      </Link>
      <Link className="font-body" to="/gallery" tabIndex={tabIndex} onClick={closeMenu}>
        Gallery
      </Link>
      <Link lassName="font-body" to="/registry" tabIndex={tabIndex} onClick={closeMenu}>
        Registry
      </Link>
      <Link className="font-body" to="/lodging" tabIndex={tabIndex} onClick={closeMenu}>
        Lodging
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;