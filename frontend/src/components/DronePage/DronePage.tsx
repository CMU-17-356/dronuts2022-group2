import React, { FC } from 'react';
import DroneCard from '../DroneCard/DroneCard';
import './DronePage.css';

interface DronePageProps {}

const DronePage: FC<DronePageProps> = () => (
  <div className="DronePage">
    <DroneCard/>
  </div>
);

export default DronePage;
