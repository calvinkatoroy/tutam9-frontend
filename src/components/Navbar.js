// frontend/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white' }}>About</Link>
    </nav>
  );
};

export default Navbar;