import React, { FC } from 'react';
import './DoughnutCartCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import donut from '../../assets/chocolate_glaze.jpg';

interface DoughnutCartCardProps {}

const DoughnutCartCard: FC<DoughnutCartCardProps> = () => (
  <div className="DoughnutCartCard">
    <div className = "row">
        <Card style={{ width: '50%' }}> 
            <Card.Img src={donut} />
        </Card>
        <Card style={{ width: '50%' }}> 
            <Card.Body>
                <Card.Title>Chocolate glazed doughnut</Card.Title>
                <Card.Subtitle>$1.99</Card.Subtitle>
                <Card.Text>
                    This is a doughnut with chocolate glaze
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

export default DoughnutCartCard;
