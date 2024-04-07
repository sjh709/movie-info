import React from 'react';
import './MovieDetailInfo.style.css';
import { Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import MovieSocial from '../../../../common/MovieSocial/MovieSocial';
import Line from './Line/Line';

const MovieDetailInfo = ({ movie }) => {
  console.log(movie);

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Row className='mb-5'>
      <Col lg={6}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
          className='movie-img'
        />
      </Col>
      <Col lg={6}>
        <div className='mt-3 mb-3'>
          {movie?.genres.map((item, index) => (
            <Badge bg='primary' key={index}>
              {item.name}
            </Badge>
          ))}
        </div>
        <h1 className='mb-3 movie-title'>{movie?.title}</h1>
        <h5 className='mb-3'>{movie?.tagline}</h5>
        <div className='mb-3'>
          <MovieSocial movie={movie} />
        </div>
        <Line />
        <p>{movie?.overview}</p>
        <Line />
        <ul className='mt-4 mb-2'>
          <li>
            <Badge bg='primary' className='info-badge'>
              Budget
            </Badge>
            $ {priceToString(movie?.budget)}
          </li>
          <li>
            <Badge bg='primary' className='info-badge'>
              Revenue
            </Badge>
            $ {priceToString(movie?.revenue)}
          </li>
          <li>
            <Badge bg='primary' className='info-badge'>
              Release Date
            </Badge>
            {movie?.release_date}
          </li>
          <li>
            <Badge bg='primary' className='info-badge'>
              Run time
            </Badge>
            {movie?.runtime} 분
          </li>
        </ul>
        <Line />
        <button className='btn-trailer'>
          <FontAwesomeIcon icon={faFilm} />
          <span>Watch Trailer</span>
        </button>
      </Col>
    </Row>
  );
};

export default MovieDetailInfo;
