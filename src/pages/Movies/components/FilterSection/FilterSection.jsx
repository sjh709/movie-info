import React from 'react';
import YearFilter from '../YearFilter/YearFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import './FilterSection.style.css';

const FilterSection = ({ sideOpen }) => {
  return (
    <div className={`filter-style ${sideOpen ? 'open' : 'close'}`}>
      <YearFilter />
      <GenreFilter />
    </div>
  );
};

export default FilterSection;
