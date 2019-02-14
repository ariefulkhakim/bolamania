import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';

export default class NavbarHome extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <Container>
            <NavbarBrand href="/">
              {' '}
              <span className="logo">
                BOLA <span style={{ color: '#ef233c' }}>MANIA</span>
              </span>{' '}
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/standing" className="nav-link">
                    Standings
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/matchday" className="nav-link">
                    MatchDay
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/club" className="nav-link">
                    Clubs
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
