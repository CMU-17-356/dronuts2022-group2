import React, { FC, SetStateAction, Dispatch } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { loginType } from '../../types/loginType';

interface LoginProps {
  updateUserType: Dispatch<SetStateAction<loginType>>
}

const Login: FC<LoginProps> = (props) => {
  const f = (e) => {
    let userName = e.target.username.value;
    if (userName === '') {
      props.updateUserType("none")
    } else if (userName === 'admin') {
      props.updateUserType("employee")
    } else {
      props.updateUserType("customer")
    }
    e.preventDefault(); // avoid refresh and losing all data
  };
  return (
    <div className="Login">
      <Form onSubmit={ f }>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>PS: Login as 'admin' to see employee view</p>
    </div>
  );
}

export default Login;
