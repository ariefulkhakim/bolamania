import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col xs="12" sm="12">
              <p className="footer-text">&copy; BolaMania 2019</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
