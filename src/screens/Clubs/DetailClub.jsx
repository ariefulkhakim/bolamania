import React, { Component } from 'react';
import Axios from 'axios';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

class DetailClub extends Component {
  state = {
    detail: null
  };
  componentDidMount() {
    let a = this.props.match;
    let id = this.props.match.params.detailclub;
    console.log(a);
    Axios.get('http://api.football-data.org/v2/teams/' + id, {
      headers: { 'X-Auth-Token': '388e96eb93334ddfa8b1450257fddbc7' }
    }).then(res => {
      console.log(res.data);
      this.setState({
        detail: res.data
      });
    });
  }
  render() {
    const { detail } = this.state;
    const aku = detail ? (
      <Container>
        <Row>
          <Col xs="12" sm="12">
            <div className="title-club">
              <Link className="detail-club-arrow" to={'/club'}>
                <FaArrowAltCircleLeft size="40" />{' '}
              </Link>
              <h1>/ {detail.name}</h1>
            </div>
          </Col>
          <Col xs="12" sm="6" style={{ marginBottom: 20 }}>
            <div className="detail-club-logo">
              <img className={detail.name} src={detail.crestUrl} alt="" />
            </div>
          </Col>
          <Col xs="12" sm="6" style={{ marginBottom: 20 }}>
            <div className="detail-club-item">
              <ul>
                <li>Name : {detail.name}</li>
                <li>ShortName : {detail.shortName}</li>
                <li>Address : {detail.address}</li>
                <li>Phone : {detail.phone}</li>
                <li>Venue : {detail.venue}</li>
                <li>ClubColors : {detail.clubColors}</li>
                <li>Founded : {detail.founded}</li>
                <li>Email : {detail.email}</li>
                <li>Website : {detail.website}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    ) : (
      <div style={{ textAlign: 'center' }}>
        <Spinner type="grow" style={{ width: '3rem', height: '3rem' }} />
      </div>
    );

    return (
      <div>
        <div>{aku}</div>
      </div>
    );
  }
}

export default DetailClub;
