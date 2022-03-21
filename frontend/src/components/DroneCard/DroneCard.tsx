import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Drone } from '../../../database/schemas/drone_schema';
import './DroneCard.css';

interface DroneCardProps {
  drone : Drone
}

const DroneCard: FC<DroneCardProps> = (props : DroneCardProps) => {
  const route = <p>{props.drone.position}</p>;

  return (
    <div className="DroneCard">
      <Card border="dark">
        <Card.Header> Drone #{props.drone.id} </Card.Header>
        <Card.Body>
          Charge: {props.drone.charge}% <br/>
          Position: {route}
        </Card.Body>
      </Card>
    </div>
  );
}

export default DroneCard;
