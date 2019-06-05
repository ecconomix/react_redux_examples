import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ theme, test}) => (
  <nav className={theme.navContainer}>
    <Link to="/" className={theme.navLink}>Home</Link>
    <Link to="/counter" className={theme.navLink}>Counter</Link>
  </nav>
);

export default Navigation;