import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { useNavigate } from 'react-router-dom';
import MovieSocial from '../MovieSocial/MovieSocial';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const navigate = useNavigate();

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
          'url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2' +
          `${movie?.poster_path}` +
          ')',
      }}
      className='movie-card'
      onClick={() => movieDetailPage(movie?.id)}
    >
      <div className='overlay'>
        <h3 className='overlay-title'>{movie?.title}</h3>
        <div className='card-genre-style'>
          {showGenre(movie?.genre_ids).map((id, index) => (
            <Badge bg='primary' key={index}>
              {id}
            </Badge>
          ))}
        </div>
        <div className='card-style'>
          <MovieSocial movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
