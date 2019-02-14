import React, { Component } from 'react';
import Carousel from './Jumbotron';
import Content from './Content';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Content />
      </div>
    );
  }
}
