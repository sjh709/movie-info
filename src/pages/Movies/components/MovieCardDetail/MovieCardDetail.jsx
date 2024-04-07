import React from 'react';
import './MovieCardDetail.style.css';
import { Badge } from 'react-bootstrap';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import MovieSocial from '../../../../common/MovieSocial/MovieSocial';
import { useNavigate } from 'react-router-dom';

const MovieCardDetail = ({ movie }) => {
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
    <div className='movie-card-area' onClick={() => movieDetailPage(movie?.id)}>
      <div
        className='info-section'
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path})`,
        }}
      >
        <div>
          <div className='movie-card-title'>
            <img
              width={60}
              height={90}
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt='movie-image'
            />
            <div>
              <h1>{movie?.title}</h1>
              <h4>{movie?.release_date.substr(0, 4)}</h4>
            </div>
          </div>
          <ul className='genre-list'>
            {showGenre(movie?.genre_ids).map((id, index) => (
              <li key={index}>
                <Badge bg='primary'>{id}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='movie-desc'>{movie?.overview}</p>
        </div>
        <MovieSocial movie={movie} />
      </div>
    </div>
  );
};

export default MovieCardDetail;
