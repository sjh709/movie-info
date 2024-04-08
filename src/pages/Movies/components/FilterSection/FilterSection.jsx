import React from 'react';

const FilterSection = ({ sideOpen }) => {
  return <div className={sideOpen ? 'open' : 'close'}>FilterSection</div>;
};

export default FilterSection;
