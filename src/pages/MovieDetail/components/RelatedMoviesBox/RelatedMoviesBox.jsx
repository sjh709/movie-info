import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';

const RecommendBox = ({ relatedMovies }) => {
  return (
    <Row className='mt-4'>
      {relatedMovies?.map((item, index) => (
        <Col lg={6} key={index} className=''>
          <MovieCard movie={item} />
        </Col>
      ))}
    </Row>
  );
};

export default RecommendBox;
