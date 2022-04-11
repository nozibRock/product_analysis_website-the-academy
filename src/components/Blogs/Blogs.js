import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
      <div>
        <Row xs={1} md={2} lg={3} className="m-5 g-4">
          <Col>
            <Card border="primary" style={{minHeight: "23rem"}}>
              <Card.Body>
                <Card.Title>What is Context API?</Card.Title>
                <Card.Text>
                  Normally, to pass data from a parent component to a child
                  component, we use props. But if the child is not a direct
                  child, it becomes tedious to send data through multiple
                  parents which is called props drilling. To avoid this, we can
                  use the Context API without having to explicitly pass a prop
                  through every parent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="secondary" style={{minHeight: "23rem"}}>
              <Card.Body>
                <Card.Title>What is Semantic Tag?</Card.Title>
                <Card.Text>
                  Semantic HTML tags allows to add meaning to the markup so that
                  search engines, screen readers, and web browsers can
                  understand it. Semantic HTML tags lets serve structured
                  content to the users, which is especially important for
                  on-page SEO and accessibility.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="success" style={{minHeight: "23rem"}}>
              <Card.Body>
                <Card.Title>
                  What is the difference between inline and inline-block?
                </Card.Title>
                <Card.Text>
                  Inline means the content flows against the layout of the page,
                  it could possibly flow around other floated elements, but
                  essentially it renders like text would. Block means the
                  element renders like a div, on it's own line. Block you can
                  specify a width and height and it always renders as a
                  rectangle. Inline block allows you to combine the ability to
                  contain the element's contents to a rectangle, but have its
                  position against the layout of the page flow like an inline
                  element would. Like its name suggests, it's an inline, block.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default Blogs;