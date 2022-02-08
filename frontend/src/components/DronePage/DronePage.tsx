import React, { FC } from 'react';
import { Accordion } from 'react-bootstrap';
import DroneCard from '../DroneCard/DroneCard';
import './DronePage.css';

interface DronePageProps {}

const DronePage: FC<DronePageProps> = () => (
  <div className="DronePage">
    <Accordion>
      {
        
      <DroneCard/>
      }
    </Accordion>
  </div>
);

export default DronePage;
