import React, { FC, useState, Component} from 'react';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './GMap.css';
import Geocode from "react-geocode";
import Login from '../Login/Login';

Geocode.enableDebug();
Geocode.setRegion("us");

interface MarkerProps {
  lat: number,
  lng: number,
  text: string
}

const Marker: FC<MarkerProps> = (props: MarkerProps) => {
  return (
    // Style with classname doesn't work for some reason here
    <div className="GMapMarker" style={{
    position: 'absolute',
  width: 20,
  height: 20,
  left: -10,
  top: -10,

  border: '5px solid #f44336',
  borderRadius: 20,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
    }}>
      {props.text}
    </div>
  );
}

interface GMapProps extends google.maps.MapOptions{
  droneAddrs: string[],
  onClick?: (e: google.maps.MapMouseEvent) => void,
  onIdle?: (map: google.maps.Map) => void,
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MAPS_KEY = "AIzaSyCaO9NsoZHXDEfqqHU6w2o_51bFiLV4tVc"
Geocode.setApiKey(MAPS_KEY)

// const query = "https://maps.googleapis.com/maps/api/geocode/json?key=" + MAPS_KEY + "&address=";

const GMap: FC<GMapProps> = (props: GMapProps) => {
  const addrs = props.droneAddrs;
  console.log(addrs)
  const [latd1, setlatD1] = useState(40.4)
  const [lngd1, setlngD1] = useState(-80)
  const [errMsg, seterrMsg] = useState("")
  Geocode.fromAddress(props.droneAddrs[0]).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setlatD1(lat);
      setlngD1(lng);
    },
    (error) => {
      seterrMsg("Could not locate address " + props.droneAddrs[0] + ". Don't worry, the droneTech api will surely still find it's way to deliver the donuts.")
      console.error(error);
    }
  );

  const ref = React.useRef<HTMLDivElement>(null);
  const style = {
    width: "400",
    height: "100%",
  }
  const options = {
    zoom: 8,
    center: {
      "lat" : 40.4698416,
      "lng" : -79.9606687,
    },
  }
   return (
     <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_KEY }}
        defaultCenter={options.center}
        defaultZoom={options.zoom}
        yesIWantToUseGoogleMapApiInternals
       >
         <Marker
          lat={latd1}
          lng={lngd1}
          text={"Drone 1 " + addrs[0]}
          /> 
         <Marker
          lat={40.4698416}
          lng={-79.9606687}
          text={"Drone 2 " + addrs[1]}
          /> 
      </GoogleMapReact>
       <p>{errMsg}</p>
    </div>
  );
}


export default GMap;
