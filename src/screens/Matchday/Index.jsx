import React, { Component } from 'react';
import Axios from 'axios';

export default class Matchday extends Component {
  componentDidMount() {
    Axios.get(
      `https://raw.githubusercontent.com/drraq/PremierLeague.json/master/data.json`
    ).then(res => console.log(res.data.season_fixtures));
  }
  render() {
    return (
      <div>
        <h1>Matchday</h1>
      </div>
    );
  }
}
