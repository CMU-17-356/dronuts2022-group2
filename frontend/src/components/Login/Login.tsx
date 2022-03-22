import React from 'react';
import { FC, SetStateAction, Dispatch, useState } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { loginType } from '../../types/loginType';

interface LoginProps {
  updateUserType: Dispatch<SetStateAction<loginType>>
}

const Login: FC<LoginProps> = (props) => {
  const [message, updateMessage] = useState('');
  const f = (e) => {
    const userName = e.target.elements['username'].value;
    const password = e.target.elements['password'].value;
    if (password === '' || userName === '') {
      updateMessage('Please enter your username and password');
      props.updateUserType('none');
    } else if (userName === 'admin') {
      updateMessage('Success: Logged in as employee');
      props.updateUserType('employee');
    } else {
      updateMessage('Success: Logged in as a customer');
      props.updateUserType('customer');
    }
    e.preventDefault(); // avoid refresh and losing all data
  };
  return (
    <div className="Login">
      {/* for testing
       <GMap droneAddrs={["5728 Solway St, Pittsburgh, PA 15217",
      "4112 Butler St, Pittsburgh, PA 15201"]}></GMap> */}
      <Form onSubmit={f}>
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
      <p>{message}</p>
    </div>
  );
};

export default Login;
