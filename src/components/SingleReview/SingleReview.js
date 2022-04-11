import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './SingleReview.css';



const SingleReview = (props) => {
    const { model, title, username, country, review, star, date } = props.review;
    return (
      <div>
        <Col>
          <Card className="p-2">
            <div>
              <Rating
                emptySymbol={
                  <FontAwesomeIcon style={{ color: "#bcbccc" }} icon={faStar} />
                }
                fullSymbol={
                  <FontAwesomeIcon style={{ color: "#dc3a1a" }} icon={faStar} />
                }
                readOnly
                precision={0.5}
                initialRating={star}
              />
            </div>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text className="text-secondary">
                {" "}
                <em>{model}</em> {date} by {username} ({country}){" "}
              </Card.Text>
              <Card.Text>{review}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </div>
    );
};

export default SingleReview;