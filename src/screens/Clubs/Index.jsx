import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { Container, Row, Col, Spinner, Button } from 'reactstrap';
import '../../assets/css/style.css';

export default class Clubs extends Component {
  state = {
    teams: []
  };

  componentDidMount() {
    let arg = this.props;
    console.log(`${arg.match.url}/detail`);
    this.getData();
  }

  getData = () => {
    Axios.get(`http://api.football-data.org/v2/competitions/PL/teams`, {
      headers: { 'X-Auth-Token': '388e96eb93334ddfa8b1450257fddbc7' }
    }).then(res => {
      console.log(res.data.teams);
      this.setState({
        teams: res.data.teams
      });
    });
  };
  render() {
    const { teams } = this.state;
    console.log(this.state.teams);
    return (
      <div>
        {teams.length ? (
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <h1 className="title-club">{`${this.props.match.url}`}</h1>
              </Col>
              {teams.map(datum => {
                return (
                  <Col xs="12" sm="6">
                    <div className="club-item">
                      <h4>{datum.name}</h4>
                      <Link
                        to={'/' + datum.id}
                        className="button-club"
                        type="button">
                        Detail
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <Spinner type="grow" style={{ width: '3rem', height: '3rem' }} />
          </div>
        )}
      </div>
    );
  }
}
