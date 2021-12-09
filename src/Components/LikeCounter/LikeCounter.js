import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

function LikeCounter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <Row className="like-wrapper">
      <Col>
        <Button className="Like like-cell" onClick={handleIncrement}>
          +
        </Button>
      </Col>
      <Col md="auto">
        <p className="like-cell">
          <strong>Likes: {count}</strong>
        </p>
      </Col>
      <Col>
        <Button className="Dislike like-cell" onClick={handleDecrement}>
          -
        </Button>
      </Col>
    </Row>
  );
}

export default LikeCounter;
