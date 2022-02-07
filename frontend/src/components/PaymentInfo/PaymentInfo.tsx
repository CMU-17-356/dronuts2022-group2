import React, { FC } from 'react';
import './PaymentInfo.css';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

interface PaymentInfoProps {}

const PaymentInfo: FC<PaymentInfoProps> = () => (
  <div className="PaymentInfo">
    <Form>
        <Form.Group className="mb-3" controlId="formCardName">
            <Form.Label>Name on card</Form.Label>
            <Form.Control type="cardName" placeholder="Enter name on card" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="cardNumber" placeholder="Enter card number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formExpMonth">
            <Form.Label>Exp Month</Form.Label>
            <Form.Select aria-label="Default select example">
                <option>January</option>
            </Form.Select>
        </Form.Group>

        <div className="row">
            <div className="col-50">
                <Form.Group className="mb-3" controlId="formExpYear">
                    <Form.Label>Exp Year</Form.Label>
                    <Form.Control type="expYear"/>
                </Form.Group>
            </div>
            
            <div className="col-50">
                <Form.Group className="mb-3" controlId="formCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control type="cvv" />
                </Form.Group>
            </div>
        </div>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
  </div>
);

export default PaymentInfo;
