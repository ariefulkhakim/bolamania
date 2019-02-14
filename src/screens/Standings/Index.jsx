import React, { Component } from 'react';
import Axios from 'axios';
import { Table, Container, Row, Col, Spinner } from 'reactstrap';
import '../../assets/css/style.css';

export default class Standings extends Component {
  state = {
    standing: []
  };

  componentDidMount() {
    this.getStandings();
  }

  getStandings = () => {
    Axios.get(`http://api.football-data.org/v2/competitions/PL/standings`, {
      headers: { 'X-Auth-Token': '388e96eb93334ddfa8b1450257fddbc7' }
    }).then(res => {
      console.log(res.data.standings[0].table);
      this.setState({
        standing: res.data.standings[0].table
      });
    });
  };

  render() {
    const { standing } = this.state;
    return (
      <div>
        {standing.length ? (
          <Container>
            <Row>
              <Col xs="12" sm="12">
                <h1 className="title-club">{`${this.props.match.url}`}</h1>
              </Col>
              <Col xs="12" sm="12">
                <Table bordered responsive>
                  <thead style={{ backgroundColor: '#2b2b2b', color: '#fff' }}>
                    <tr>
                      <th>Position</th>
                      <th>Club</th>
                      <th>Main</th>
                      <th>Menang</th>
                      <th>Imbang</th>
                      <th>Kalah</th>
                      <th>Goal</th>
                      <th>Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standing.map(datum => {
                      return (
                        <tr>
                          <th scope="row">{datum.position}</th>
                          <td>
                            <img
                              style={{ width: 30, paddingRight: 10 }}
                              src={datum.team.crestUrl}
                              alt=""
                            />

                            {datum.team.name}
                          </td>
                          <td>{datum.playedGames}</td>
                          <td>{datum.won}</td>
                          <td>{datum.draw}</td>
                          <td>{datum.lost}</td>
                          <td>{datum.goalsFor}</td>
                          <td
                            style={{ backgroundColor: '#eee', color: '#333' }}>
                            {datum.points}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
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
