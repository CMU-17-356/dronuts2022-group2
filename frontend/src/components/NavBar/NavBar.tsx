import React, { FC } from 'react';
import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => (
  <div className="NavBar">
    <Navbar bg="light" variant="light">
        <Container>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Checkout</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
  </div>
);

export default NavBar;
