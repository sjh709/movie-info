import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './SortSection.style.css';

const sortKeyArr = [
  'popularity.desc',
  'popularity.asc',
  'primary_release_date.desc',
  'primary_release_date.asc',
  'vote_average.desc',
  'vote_average.asc',
  'revenue.desc',
  'revenue.asc',
];

const SortSection = ({ sideOpen }) => {
  const [sortValue, setSortValue] = useState('');

  const dropdownName = (key) => {
    switch (key) {
      case 'popularity.desc':
        return 'Popularity(Desc)';
      case 'popularity.asc':
        return 'Popularity(Asc)';
      case 'primary_release_date.desc':
        return 'Release Day(Desc)';
      case 'primary_release_date.asc':
        return 'Release Day(Asc)';
      case 'vote_average.desc':
        return 'Vote(Desc)';
      case 'vote_average.asc':
        return 'Vote(Asc)';
      case 'revenue.desc':
        return 'Revenue(Desc)';
      case 'revenue.asc':
        return 'Revenue(Asc)';
      default:
        return;
    }
  };

  return (
    <div className={`sort-filter-style ${sideOpen ? 'open' : 'close'}`}>
      <div className='sort-filter-area'>
        <h6>Sort Results By</h6>
        <DropdownButton
          title={`${sortValue ? dropdownName(sortValue) : 'Sort By'}`}
          onSelect={(event) => setSortValue(event)}
        >
          {sortKeyArr.map((item, index) => (
            <Dropdown.Item eventKey={item} key={index}>
              {dropdownName(item)}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default SortSection;
