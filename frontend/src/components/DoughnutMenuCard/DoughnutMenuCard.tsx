import React, { FC } from 'react';
import './DoughnutMenuCard.css';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';
import donut from '../../assets/chocolate_glaze.jpg';

interface DoughnutMenuCardProps { }

const DoughnutMenuCard: FC<DoughnutMenuCardProps> = () => (
    <div className="DoughnutMenuCard">
        <Card className="border rounded" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={donut} />
            <Card.Body>
            <Card.Title>Chocolate glazed doughnut</Card.Title>
                <Card.Subtitle>$1.99</Card.Subtitle>
                <Card.Text>
                    This is a doughnut with chocolate glaze
                </Card.Text>
                <Form>
                    <Form.Label>Quantity</Form.Label>
                    <InputGroup className="mb-3">
                            <Button variant="outline-success">+</Button>
                            <FormControl aria-label="Quantity Input" />
                            <Button variant="outline-danger">-</Button>
                    </InputGroup>
                </Form>
            </Card.Body>
        </Card>
    </div>
);

export default DoughnutMenuCard;
