import React, { Component } from 'react';
import '../../assets/css/style.css';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { FaClipboardList, FaFutbol, FaList } from 'react-icons/fa';

export default class Content extends Component {
  render() {
    return (
      <div>
        <div className="category">
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <div className="title">
                  <h2>
                    Category <span className="span-color">Menu</span>{' '}
                  </h2>
                  <hr className="hr-content" />
                </div>
              </Col>
              <Col xs="12" sm="4">
                <div className="cat-item">
                  <FaFutbol size="80" />
                  <div className="cat-head">
                    <h4>Club</h4>
                  </div>
                  <p className="cat-p">
                    Menu yang berisi daftar club liga inggris tahun kompetisi
                    2018/2019
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="4">
                <div className="cat-item">
                  <FaClipboardList size="80" />
                  <div className="cat-head">
                    <h4>MatchDay</h4>
                  </div>
                  <p className="cat-p">
                    Menu yang berisi daftar club liga inggris tahun kompetisi
                    2018/2019
                  </p>
                </div>
              </Col>
              <Col xs="12" sm="4">
                <div className="cat-item">
                  <FaList size="80" />
                  <div className="cat-head">
                    <h4>Standing</h4>
                  </div>
                  <p className="cat-p">
                    Menu yang berisi daftar club liga inggris tahun kompetisi
                    2018/2019
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
