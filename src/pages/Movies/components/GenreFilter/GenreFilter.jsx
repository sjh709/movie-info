import React from 'react';
import { useMovieGenreQuery } from '../../../../hooks/useMovieGenre';
import { Badge } from 'react-bootstrap';
import './GenreFilter.style.css';

const GenreFilter = () => {
  const { data: genreData } = useMovieGenreQuery();
  return (
    <div className='genre-filter-area'>
      <h6>Genres</h6>
      {genreData?.map((item, index) => (
        <Badge bg='primary' key={index}>
          {item.name}
        </Badge>
      ))}
    </div>
  );
};

export default GenreFilter;
