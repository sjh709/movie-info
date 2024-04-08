import React from 'react';
import { useMovieDetailCreditsQuery } from '../../../../hooks/useMovieDetailCredits';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner';
import CreditsCard from '../CreditsCard/CreditsCard';
import './MovieDetailCredits.style.css';

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
    <Container>
      <Row>
        <Col>
          {credits?.length > 0 && (
            <div>
              <h3 className='mb-3'>Top Billed Cast</h3>
              <Row className='mb-4 item-align'>
                {credits?.splice(0, 6).map((item, index) => (
                  <Col key={index} xs='auto' className='mb-3'>
                    <CreditsCard credits={item} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetailCredits;
