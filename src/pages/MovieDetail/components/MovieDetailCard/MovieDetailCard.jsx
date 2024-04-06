import React from 'react';
import './MovieDetailCard.style.css';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';

const MovieDetailCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div className='movie-card-area'>
      <div
        className='info-section'
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`,
        }}
      >
        <div>
          <div className='movie-card-title'>
            <img
              width={60}
              height={90}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <div>
              <h1>{movie.title}</h1>
              <h4>{movie.release_date.substr(0, 4)}</h4>
            </div>
          </div>
          <ul className='genre-list'>
            {showGenre(movie.genre_ids).map((id, index) => (
              <li key={index}>
                <Badge bg='primary'>{id}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='movie-desc'>{movie.overview}</p>
        </div>
        <div>
          <ul className='movie-social'>
            <li>
              <FontAwesomeIcon
                icon={faImdb}
                style={{ color: `var(--color-yellow)` }}
              />
              <span>{movie.vote_average}</span>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faUsers}
                style={{ color: `var(--color-light-slate-gray)` }}
              />
              <span>{movie.popularity}</span>
            </li>
            <li>
              <span className='adult'>
                {movie.adult ? 'over 18' : 'under 18'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
