import React, { FC, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { dronesData } from '../../sample_data';
import { Drone } from '../../../database/schemas/drone_schema';
import DroneCard from '../DroneCard/DroneCard';
import './DronePage.css';

interface DronePageProps {}

const DronePage: FC<DronePageProps> = (props : DronePageProps) => {
    const convertRows = (drones : Array<Drone>) => {
        return drones.map((drone : Drone) => <Row key={drone.id}><DroneCard drone={drone}></DroneCard></Row>);
    }
    let initialRows = convertRows(dronesData);
    const [rows, setRows] = useState(initialRows);
    
    let drones = dronesData;
    const addDrone = () => {
        const newId = Math.max.apply(Math, drones.map(function(o) { return o.id; })) + 1;
        let drone : Drone = {
            "id" : newId,
            "charge" : 100,
            "destinations" : []
        }
        drones.push(drone);
        console.log(rows);
        setRows(convertRows(drones));
    }

    return (
        <div className="DronePage">
        <Container>
        {rows}
        <Button onClick={addDrone}>New drone</Button>
        </Container>
    </div>
    );
}

export default DronePage;
