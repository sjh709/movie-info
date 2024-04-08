import React from 'react';
import YearFilter from '../YearFilter/YearFilter';
import GenreFilter from '../GenreFilter/GenreFilter';
import './FilterSection.style.css';

const FilterSection = ({ sideOpen, genreId, setGenreId, year, setYear }) => {
  return (
    <div className={`filter-style ${sideOpen ? 'open' : 'close'}`}>
      <YearFilter year={year} setYear={setYear} />
      <GenreFilter genreId={genreId} setGenreId={setGenreId} />
    </div>
  );
};

export default FilterSection;
