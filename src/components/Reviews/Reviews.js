import React from 'react';
import { Button, Container,  Row } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
import  './Reviews.css';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Reviews = (props) => {
  const { reviews } = props; // Destructuring reviews from props
  const navigate = useNavigate();
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

        <Row>
          <div align="center" className="pb-5">
            <Button
              onClick={() => navigate("/opinions")}
              variant="outline-info"
            >
              See all reviews{" "}
              <FontAwesomeIcon className="ms-2" icon={faArrowCircleRight} />
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};;

export default Reviews;