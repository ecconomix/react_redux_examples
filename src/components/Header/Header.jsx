import React from 'react';
import Navigation from './Navigation/Navigation';

import theme from './theme.scss';

const Header = () => (
  <header className={theme.headerContanier}>
    <Navigation theme={theme} />
  </header>
);

export default Header;
