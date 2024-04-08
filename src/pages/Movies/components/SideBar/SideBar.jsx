import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './SideBar.style.css';

const SideBar = ({ title }) => {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div className='side-bar-area'>
      <div className='side-bar-style' onClick={() => setSideOpen(!sideOpen)}>
        <h5>{title}</h5>
        {sideOpen ? (
          <FontAwesomeIcon icon={faArrowDown} id='arrow-down' />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} id='arrow-right' />
        )}
      </div>
    </div>
  );
};

export default SideBar;
