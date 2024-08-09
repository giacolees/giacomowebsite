import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../assets/graphics/logo.svg';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  background: #FFFFFA;
  color: #121212;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 0;
  height: 10%;
  overflow-x: hidden;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: right;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const NavItem = styled(motion.a)`
  display: inline;
  margin: 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #121212;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1.2rem; /* Change flex direction for tablets and smaller screens */
  }
`;

const NavLink = styled(Link)`
  color: #121212;
  text-decoration: none;
`;

const Logo = styled(motion.a)`
    margin-left: 1rem;
    svg {
        width: 8rem;
        height: 5rem;
    }
`;

const Header = () => {

    const handleNavigation = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  let location = useLocation();
  let fixed = location.pathname === '/' ? true : false;
  
  return (
    <Nav fixed = {fixed}>
        <Logo href="/giacomowebsite"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigation('/')}>
            <LogoSVG />
        </Logo>
        <NavList>
            {/*<NavItem
                href="/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavigation()}
                >
            </NavItem>
            Works*/}
            <NavItem
                href="/about"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleNavigation()}
                >
            About
            </NavItem>
        </NavList>
    </Nav>
  );
};

export default Header;
