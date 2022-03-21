import React, { FC } from 'react';
import './DeliveryInfo.css';
import { Form } from 'react-bootstrap';

interface DeliveryInfoProps {}

const DeliveryInfo: FC<DeliveryInfoProps> = () => (
  <div className="DeliveryInfo">
      <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phone" placeholder="Enter phone number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formStreetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="address" placeholder="Enter street address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="city" placeholder="Enter city" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formState">
          <Form.Label>State</Form.Label>
          <Form.Select aria-label="Choose state">
              <option>Choose...</option>
              <option value="1">...</option>
          </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formZip">
          <Form.Label>ZIP Code</Form.Label>
          <Form.Control type="zip" placeholder="Enter ZIP code" />
      </Form.Group>
  </div>
);

export default DeliveryInfo;
