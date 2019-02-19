import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Index';
import Club from './screens/Clubs/Index';
import Matchday from './screens/Matchday/Index';
import Standing from './screens/Standings/Index';
import Navbar from './screens/Home/Navbar';
import DetailClub from './screens/Clubs/DetailClub';
import Footer from './screens/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/standing" component={Standing} />
            <Route path="/matchday" component={Matchday} />
            <Route path="/club" component={Club} />
            <Route path="/:detailclub" component={DetailClub} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
