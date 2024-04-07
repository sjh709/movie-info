import React from 'react';
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className='movie-slide-area'>
      <h3>{title}</h3>
      <Carousel
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={10000}
        showDots={true}
        centerMode={true}
        containerClass='carousel-container'
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
