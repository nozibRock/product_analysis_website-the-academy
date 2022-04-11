import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <span className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <br />
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read more" : " Show less"}
      </span>
    </span>
  );
};

const SingleOpinion = (props) => {
    const { model, title, username, country, review, star, date } =
      props.review;
    return (
      <div>
        <Col>
          <Card
            style={{ minHeight: "350px", background: "#f1f5f9" }}
            className="p-2"
          >
            <div className="d-flex justify-content-center">
              <Rating
                size="large"
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
              <Card.Text>
                <ReadMore>{review}</ReadMore>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default SingleOpinion;