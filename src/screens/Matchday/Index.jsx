import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

export default class Matchday extends Component {
  state = {
    matchday: []
  };
  componentDidMount() {
    Axios.get(`http://api.football-data.org/v2/competitions/PL/matches`, {
      headers: { 'X-Auth-Token': '388e96eb93334ddfa8b1450257fddbc7' }
    }).then(res => {
      console.log(res.data.matches);
      this.setState({
        matchday: res.data.matches
      });
    });
  }
  render() {
    console.log(this.state.matchday);
    return (
      <div>
        {this.state.matchday.map(datum => {
          return (
            <Container>
              <h1>
                {datum.score['fullTime'].homeTeam} | {datum.homeTeam['name']} vs{' '}
                {datum.awayTeam['name']} | {datum.score['fullTime'].awayTeam}
              </h1>
              <NavItem>
                <NavLink tag={Link} to="/test" activeClassName="active">
                  {datum.matchday}
                </NavLink>
              </NavItem>
            </Container>
          );
        })}
      </div>
    );
  }
}
