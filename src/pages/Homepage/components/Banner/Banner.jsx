import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import './Banner.style.css';
import Spinner from 'react-bootstrap/Spinner';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  //   console.log('data', data);
  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <div
      style={{
        backgroundImage:
          'url(' +
          `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.results[0].poster_path}` +
          ')',
      }}
      className='banner'
    >
      <div className='banner-text-area'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  );
};

export default Banner;