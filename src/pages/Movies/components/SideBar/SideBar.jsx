import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './SideBar.style.css';
import SortSection from '../SortSection/SortSection';
import FilterSection from '../FilterSection/FilterSection';

const SideBar = ({ title, sortValue, setSortValue, genreId, setGenreId }) => {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div>
      <div className='side-bar-style'>
        <div className='side-title' onClick={() => setSideOpen(!sideOpen)}>
          <h5>{title}</h5>
          <div>
            {sideOpen ? (
              <FontAwesomeIcon icon={faArrowDown} id='arrow-down' />
            ) : (
              <FontAwesomeIcon icon={faArrowRight} id='arrow-right' />
            )}
          </div>
        </div>
        <div>
          {title === 'Sort' ? (
            <SortSection
              sideOpen={sideOpen}
              sortValue={sortValue}
              setSortValue={setSortValue}
            />
          ) : (
            <FilterSection
              sideOpen={sideOpen}
              genreId={genreId}
              setGenreId={setGenreId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
