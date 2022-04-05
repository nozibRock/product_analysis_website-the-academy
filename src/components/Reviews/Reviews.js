import React from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import  './Reviews.css';

const Reviews = (props) => {
  const { reviews } = props; // Destructuring reviews from props
  return (
    <div>
      <Container className="courses-container">
        <h1 className="heading">REVIEWS</h1>
        <hr />
        <p>USERS SAY</p>
        <Row xs={1} sm={1} lg={3} xxl={3} className="my-5 g-4">
          {reviews.map((review) => (
            <SingleReview key={review.id} review={review}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};;

export default Reviews;