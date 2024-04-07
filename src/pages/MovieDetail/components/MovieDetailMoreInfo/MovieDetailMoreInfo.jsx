import React, { useState } from 'react';
import './MovieDetailMoreInfo.style.css';
import ReviewBox from './ReviewBox/ReviewBox';
import RecommendBox from './RecommendBox/RecommendBox';

const MovieDetailMoreInfo = () => {
  const [btnActive, setBtnActive] = useState(true);

  return (
    <div className='button-area'>
      <button
        className={btnActive ? 'active' : ''}
        onClick={() => setBtnActive(!btnActive)}
      >
        REVIEW
      </button>
      <button
        className={btnActive ? '' : 'active'}
        onClick={() => setBtnActive(!btnActive)}
      >
        RELATED MOVIES
      </button>
      <div>{btnActive ? <ReviewBox /> : <RecommendBox />}</div>
    </div>
  );
};

export default MovieDetailMoreInfo;
