import React from 'react';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import MovieDetailCard from '../MovieDetail/components/MovieDetailCard/MovieDetailCard';

// 경로
// 1. nav바에서 클릭해서 온 경우 => popularMovie 보여줌
// 2. 키워드 입력해서 온 경우 => 키워드와 관련된 영화들을 보여줌
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  // console.log(data);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={6} xs={12}>
                <MovieDetailCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
