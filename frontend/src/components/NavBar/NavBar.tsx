import React, { FC } from 'react';
import './NavBar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
interface NavBarProps { }

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar">
    <Navbar bg="light" expand="lg"> <Container>
      <Navbar.Brand href="home">Dronuts</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="menu">Donut Menu</Nav.Link>
          <Nav.Link href="checkout">Checkout</Nav.Link>
          <Nav.Link href="backlog">Backlog</Nav.Link>
          <Nav.Link href="drones">Drones</Nav.Link>
          <Nav.Link href="login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  </div>
);

export default NavBar;
