import React, { FC } from 'react';
import './NavBar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"
import { loginType } from '../../types/loginType';
interface NavBarProps {
  userType: loginType
}

const NavBar: FC<NavBarProps> = (props) => {
  let links = <></>
  if (props.userType === "customer") {
    links = <>
      <Link to="menu">Donut Menu</Link>
      <Link to="checkout">Checkout</Link>
    </>
  } else if (props.userType === "employee") {
    links = <>
      <Link to="backlog">Backlog</Link>
      <Link to="drones">Drones</Link>
    </>
  }
  return (
    <div className="NavBar">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navMenu">
              {links}
              <Link to="login">Login</Link>
              <div className="dot"></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
