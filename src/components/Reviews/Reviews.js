import React from 'react';
import { Container,  Row } from 'react-bootstrap';
import  './Reviews.css';
import SingleReview from '../SingleReview/SingleReview';


const Reviews = (props) => {
  const { reviews } = props; // Destructuring reviews from props
  
  return (
    <div>
      <Container className="courses-container">
        <h1 className="heading">REVIEWS</h1>
        <hr />
        <p>USERS SAY</p>
        <Row xs={1} className="my-5 g-4">
          {reviews.map((review) => (
            <SingleReview key={review.id} review={review}></SingleReview>
          ))}
        </Row>
      </Container>
    </div>
  );
};;

export default Reviews;