import React, { FC } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className="Login">
    <Form>
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
  </div>
);

export default Login;
