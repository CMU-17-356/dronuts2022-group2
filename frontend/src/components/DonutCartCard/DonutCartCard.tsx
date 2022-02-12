import React, { FC } from 'react';
import './DonutCartCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import donut from '../../assets/chocolate_glaze.jpg';

interface DonutCartCardProps {}

const DonutCartCard: FC<DonutCartCardProps> = () => (
  <div className="DonutCartCard">
    <div className = "row">
        <Card style={{ width: '50%' }}> 
            <Card.Img src={donut} />
        </Card>
        <Card style={{ width: '50%' }}> 
            <Card.Body>
                <Card.Title>Chocolate glazed donut</Card.Title>
                <Card.Subtitle>$1.99</Card.Subtitle>
                <Card.Text>
                    This is a donut with chocolate glaze
                </Card.Text>
            </Card.Body>
            <Form>
                <Form.Label>Quantity</Form.Label>
                <InputGroup className="mb-3">
                        <Button variant="outline-success">+</Button>
                        <FormControl aria-label="Quantity Input" />
                        <Button variant="outline-danger">-</Button>
                </InputGroup>
            </Form>
        </Card>
    </div>
  </div>
);

export default DonutCartCard;
