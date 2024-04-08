import React, { useState } from 'react';
import './MovieDetailInfo.style.css';
import { Row, Col, Badge, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import MovieSocial from '../../../../common/MovieSocial/MovieSocial';
import Line from '../Line/Line';
import { useMovieTrailerQuery } from '../../../../hooks/useMovieTrailer';
import YouTube from 'react-youtube';

const MovieDetailInfo = ({ movie, id }) => {
  const [show, setShow] = useState(false);
  const { data: video } = useMovieTrailerQuery({ id });

  const priceToString = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  };

  return (
    <div>
      <Row className='mb-5'>
        <Col lg={6}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            className='movie-img'
            alt='movie-image'
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
          <button className='btn-trailer' onClick={() => setShow(true)}>
            <FontAwesomeIcon icon={faFilm} />
            <span>Watch Trailer</span>
          </button>
        </Col>
      </Row>
      <Modal
        show={show}
        centered={true}
        onHide={() => setShow(false)}
        dialogClassName='modal-90w'
        contentClassName='modal-style'
      >
        <Modal.Header closeVariant='white' closeButton />
        <Modal.Body>
          <YouTube
            videoId={video && video[0]?.key}
            opts={opts}
            style={{ height: '100%' }}
            onReady={(event) => event.target.mute()}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MovieDetailInfo;
