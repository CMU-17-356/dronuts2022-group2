import React, { FC } from 'react';
import './NavBar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"
interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar">
      <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="menu">Donut Menu</Link>
            <Link to="checkout">Checkout</Link>
            <Link to="backlog">Backlog</Link>
            <Link to="drones">Drones</Link>
            <Link to="login">Login</Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
);

export default NavBar;
