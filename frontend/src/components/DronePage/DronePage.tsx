import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import { drones } from '../../sample_data';
import { Drone } from '../../../database/schemas/drone_schema';
import DroneCard from '../DroneCard/DroneCard';
import './DronePage.css';

interface DronePageProps {}

const DronePage: FC<DronePageProps> = (props) => {
  const rows = drones.map((drone : Drone) => <Row key={drone.id}><DroneCard drone={drone}></DroneCard></Row>)

  return (
    <div className="DronePage">
    <Container>
      {rows}
    </Container>
  </div>
  );
}

export default DronePage;
