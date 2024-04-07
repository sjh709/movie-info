import React from 'react';
import { useMovieDetailCreditsQuery } from '../../../../hooks/useMovieDetailCredits';
import { Alert, Col, Row } from 'react-bootstrap';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import CreditsCard from '../CreditsCard/CreditsCard';

const MovieDetailCredits = ({ id }) => {
  const {
    data: credits,
    isLoading,
    isError,
    error,
  } = useMovieDetailCreditsQuery({
    id,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <Alert variant='danger'>{error.message}</Alert>;
  }

  return (
    <Row>
      <Col>
        <h3>주요 출연진</h3>
        <Row className='mb-5'>
          {credits?.splice(0, 8).map((item, index) => (
            <Col key={index}>
              <CreditsCard credits={item} />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default MovieDetailCredits;
