import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from '../../../../common/MovieCard/MovieCard';

const RecommendBox = ({ relatedMovies }) => {
  return (
    <div>
      {relatedMovies.length === 0 ? (
        <Row className='mt-4 px-4'>
          <Col>추천 영화가 없습니다.</Col>
        </Row>
      ) : (
        <Row className='mt-4'>
          {relatedMovies?.map((item, index) => (
            <Col lg={6} key={index} className=''>
              <MovieCard movie={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default RecommendBox;
