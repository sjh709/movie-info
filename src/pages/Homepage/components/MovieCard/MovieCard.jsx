import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';

const MovieCard = ({ movie }) => {
  console.log('movie', movie);
  return (
    <div
      style={{
        backgroundImage:
          'url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces' +
          `${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
    >
      <div className='overlay'>
        <h3 className='overlay-title'>{movie.title}</h3>
        {movie.genre_ids.map((id) => (
          <Badge bg='primary'>{id}</Badge>
        ))}
        <div className='overlay-info'>
          <FontAwesomeIcon
            icon={faImdb}
            style={{ color: `var(--color-yellow)` }}
          />
          <span>{movie.vote_average}</span>
          <FontAwesomeIcon
            icon={faUsers}
            style={{ color: `var(--color-light-slate-gray)` }}
          />
          <span>{movie.popularity}</span>
          <span className='adult'>{movie.adult ? 'over18' : 'under18'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
