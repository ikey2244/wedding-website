  
import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from "gatsby"

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link className="font-body"  to="/rsvp" tabIndex={tabIndex}>
        RSVP
      </Link>
      <Link className="font-body"  to="/our-story" tabIndex={tabIndex}>
        Our Story
      </Link>
      <Link className="font-body"  to="/location" tabIndex={tabIndex}>
        Location
      </Link>
      <Link className="font-body"  to="/registry" tabIndex={tabIndex}>
        Registry
      </Link>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;