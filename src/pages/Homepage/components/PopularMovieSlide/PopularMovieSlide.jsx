import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const responsive = {
  desktop1: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop2: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 430 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 430, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }
  return (
    <div className='popular-movie-area'>
      <h3>Popular Movies</h3>
      <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        showDots={true}
        centerMode={true}
        containerClass='carousel-container'
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMovieSlide;
