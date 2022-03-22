import React, { FC, SetStateAction, Dispatch, useState } from 'react';
import '../Login/Login.css';
import { Button, Form } from 'react-bootstrap';
import { loginType } from '../../types/loginType';

interface LoginProps {
  updateUserType: Dispatch<SetStateAction<loginType>>
}

const Signup: FC<LoginProps> = (props) => {
  const [message, updateMessage] = useState('');
  const f = (e) => {
    const p1 = e.target.password.value;
    const p2 = e.target.password2.value;
    if (p1 === '') {
      props.updateUserType('none');
      updateMessage('Please enter a nonempty password');
    } else if (p1 === p2) {
      props.updateUserType('employee');
      updateMessage('Successfully signed up!');
    } else {
      props.updateUserType('none');
      updateMessage('Passwords don\'t match, try again.');
    }
    e.preventDefault(); // avoid refresh and losing all data
  };
  return (
    <div className="Login">
      <Form onSubmit={ f }>
        <h1>Sign Up</h1>

        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Re-enter password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>{message}</p>
    </div>
  );
};

export default Signup;
