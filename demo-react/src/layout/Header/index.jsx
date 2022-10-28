import React from 'react';
import Button from '../../components/common/Button';
import SearchForm from '../../components/SearchForm';

import './style.scss'



const Header = (props) => {
  return (
    <header className="header">
      <Button />
      <SearchForm />
    </header>
  );
};

Header.propTypes = {};

export default Header;