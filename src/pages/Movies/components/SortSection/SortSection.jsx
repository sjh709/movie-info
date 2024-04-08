import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './SortSection.style.css';

const sortArr = [
  { key: 'popularity-desc', name: 'Popularity(Desc)' },
  { key: 'popularity-asc', name: 'Popularity(Asc)' },
  { key: 'release_date-desc', name: 'Release Day(Desc)' },
  { key: 'release_date-asc', name: 'Release Day(Asc)' },
  { key: 'vote_average-desc', name: 'Vote(Desc)' },
  { key: 'vote_average-asc', name: 'Vote(Asc)' },
  { key: 'revenue-desc', name: 'Revenue(Desc)' },
  { key: 'revenue-asc', name: 'Revenue(Asc)' },
];

const SortSection = ({ sideOpen }) => {
  return (
    <div className={`sort-filter-style ${sideOpen ? 'open' : 'close'}`}>
      <div className='sort-filter-area'>
        <h6>Sort Results By</h6>
        <DropdownButton title='Sort By'>
          {sortArr.map((obj) => (
            <Dropdown.Item eventKey={obj.key}>{obj.name}</Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
};

export default SortSection;
