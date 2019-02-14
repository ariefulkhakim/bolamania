import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Example = props => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <div className="jumbo-text">
            <h1 className="display-3">
              BOLA <span className="jumbo-title">MANIA</span>
            </h1>
            <p className="lead">
              This is a simple hero unit, a simple Jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p className="lead">
              <Button className="jumbo-button">Learn More</Button>
            </p>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
