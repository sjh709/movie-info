import React from 'react';
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider
        title='Upcoming Movies'
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpcomingMovieSlide;
