import React from 'react';
import InputText from '../common/InputText';
import Button from '../common/Button';

import './style.scss'
const SearchForm = (props) => {
  return (
    <div>
      <InputText />
      <Button />
    </div>
  );
};

SearchForm.propTypes = {};

export default SearchForm;