import React, { useState } from 'react';
import './MovieDetailMoreInfo.style.css';
import ReviewBox from './ReviewBox/ReviewBox';
import RelatedMoviesBox from './RelatedMoviesBox/RelatedMoviesBox';
import { useMovieReviewQuery } from '../../../../hooks/useMovieReview';
import { useRelatedMoviesQuery } from '../../../../hooks/useRelatedMovies';

const MovieDetailMoreInfo = ({ id }) => {
  const [btnActive, setBtnActive] = useState(true);
  const { data: review } = useMovieReviewQuery({ id });
  const { data: relatedMovies } = useRelatedMoviesQuery({ id });

  return (
    <div className='button-area'>
      <button
        className={btnActive ? 'active' : ''}
        onClick={() => setBtnActive(!btnActive)}
      >
        REVIEW ({review?.length})
      </button>
      <button
        className={btnActive ? '' : 'active'}
        onClick={() => setBtnActive(!btnActive)}
      >
        RELATED MOVIES ({relatedMovies?.length})
      </button>
      <div>
        {btnActive ? (
          <ReviewBox review={review} />
        ) : (
          <RelatedMoviesBox relatedMovies={relatedMovies} />
        )}
      </div>
    </div>
  );
};

export default MovieDetailMoreInfo;
