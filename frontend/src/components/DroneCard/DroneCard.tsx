import React, { FC } from 'react';
import { Accordion } from 'react-bootstrap';
import './DroneCard.css';

interface DroneCardProps { }

const DroneCard: FC<DroneCardProps> = () => (
  <div className="DroneCard">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Order #1</Accordion.Header>
        <Accordion.Body>
          Doughnut Order 1
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
);

export default DroneCard;
