import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();
  // console.log(movie);

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  const movieDetailPage = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces' +
          `${movie.poster_path}` +
          ')',
      }}
      className='movie-card'
      onClick={() => movieDetailPage(movie.id)}
    >
      <div className='overlay'>
        <h3 className='overlay-title'>{movie.title}</h3>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge bg='primary' key={index}>
            {id}
          </Badge>
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
