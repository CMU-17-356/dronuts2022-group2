import React, { FC } from 'react';
import './DoughnutCartCard.css';
import { Card } from 'react-bootstrap';
import donut from './chocolate-glaze.jpg';

interface DoughnutCartCardProps {}

const DoughnutCartCard: FC<DoughnutCartCardProps> = () => (
  <div className="DoughnutCartCard">
    <Card>
        <Card.Img variant="top" src={donut} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            A chocolate glazed doughnut
            </Card.Text>
        </Card.Body>
    </Card>
  </div>
);

export default DoughnutCartCard;
