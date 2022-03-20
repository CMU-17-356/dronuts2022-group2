import { FC, } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Drone } from '../../../database/schemas/drone_schema';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import DroneCard from '../DroneCard/DroneCard';
import GMap from '../GMap/GMap';
import './DronePage.css';


interface DronePageProps {
  drones: Drone[]
}

const DronePage: FC<DronePageProps> = (props: DronePageProps) => {
  const convertRows = (drones: Drone[]) => {
    return drones.map((drone: Drone) => <Row key={drone.id}><DroneCard drone={drone}>
    </DroneCard>
    </Row>);
  }
    console.log("DRONES")
    console.log(props.drones)

  return (
    <div className="DronePage">
      <Container>
        <Row>
          <GMap droneAddrs={props.drones.map((drone: Drone) => drone.position)}></GMap>
</Row>
        {convertRows(props.drones)}
      </Container>
    </div>
  );
}


export default DronePage;
