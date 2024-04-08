import React from 'react';
import RangeSlider from 'react-range-slider-input';
import './YearFilter.style.css';

const CURRENT_YEAR = new Date().getFullYear();

const YearFilter = ({ year, setYear }) => {
  return (
    <div className='year-filter-wrapper'>
      <div className='year-filter-area'>
        <h6>YEAR Filter</h6>
        <p>
          From: <span>{year[0] || '1990'}</span> - to: <span>{year[1]}</span>
        </p>
        <RangeSlider
          min={1990}
          max={CURRENT_YEAR}
          defaultValue={year}
          onInput={(value) => setYear(value)}
        />
      </div>
    </div>
  );
};

export default YearFilter;
