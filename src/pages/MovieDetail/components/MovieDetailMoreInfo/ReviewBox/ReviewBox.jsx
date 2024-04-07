import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './ReviewBox.style.css';

const ReviewBox = ({ review }) => {
  return (
    <Row className='mt-4 px-4 py-2 review-box'>
      {review?.map((item, index) => (
        <Col
          key={index}
          lg={12}
          className={index !== review.length - 1 && 'border-style'}
        >
          <h5 className='mt-3'>{item.author}</h5>
          <p>{item.content}</p>
        </Col>
      ))}
    </Row>
  );
};

export default ReviewBox;
