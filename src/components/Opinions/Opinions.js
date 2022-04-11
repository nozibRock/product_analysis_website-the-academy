import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SingleOpinion from '../SingleOpinion/SingleOpinion';

const Opinions = (props) => {
  const { reviews } = props; // Destructuring reviews from props
  const navigate = useNavigate();
  return (
    <div>
      <Container className="courses-container">
        <h1 className="heading">Product Reviews</h1>

        <Row xs={1} sm={1} lg={3} xxl={3} className="my-5 g-4">
          {reviews.map((review) => (
            <SingleOpinion key={review.id} review={review}></SingleOpinion>
          ))}
        </Row>

        <Row>
          <div align="center" className="pb-5">
            <Button onClick={() => navigate("/reviews")} variant="outline-info">
              See all reviews{" "}
              <FontAwesomeIcon className="ms-2" icon={faArrowCircleRight} />
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};;

export default Opinions;