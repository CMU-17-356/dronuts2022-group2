import React, { FC, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import './GMap.css';
import Geocode from 'react-geocode';


Geocode.enableDebug();
Geocode.setRegion('us');

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
      padding: 4,
    }}>
      {props.text}
    </div>
  );
};

interface GMapProps extends google.maps.MapOptions{
  droneAddrs: string[],
  onClick?: (e: google.maps.MapMouseEvent) => void,
  onIdle?: (map: google.maps.Map) => void,
}
const MAPS_KEY = process.env.REACT_APP_MAPS_KEY;
Geocode.setApiKey(MAPS_KEY);

const GMap: FC<GMapProps> = (props: GMapProps) => {
  const addrs = props.droneAddrs;
  console.log(addrs);
  const donut_shop_lat = 40.4698416;
  const donut_shop_lng =-79.9606687;
  console.log(process.env);
  console.log(MAPS_KEY);
  const [latd1, setlatD1] = useState(donut_shop_lat);
  const [lngd1, setlngD1] = useState(donut_shop_lng);
  const [errMsg, seterrMsg] = useState('');
  Geocode.fromAddress(props.droneAddrs[0]).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setlatD1(lat);
        setlngD1(lng);
      },
      (error) => {
        seterrMsg('Could not locate address ' + props.droneAddrs[0] + '. Don\'t worry, the droneTech api will surely still find it\'s way to deliver the donuts.');
        console.error(error);
      },
  );

  const options = {
    zoom: 8,
    center: {
      'lat': donut_shop_lat,
      'lng': donut_shop_lng,
    },
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <p>{errMsg}</p>
      <GoogleMapReact
        bootstrapURLKeys={{ key: MAPS_KEY }}
        defaultCenter={options.center}
        defaultZoom={options.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <Marker
          lat={latd1}
          lng={lngd1}
          text={'Drone 1 ' + addrs[0]}
        />
        <Marker
          lat={donut_shop_lat} // location of the donut shop
          lng={donut_shop_lng}
          text={'Drone 2 ' + addrs[1]}
        />
      </GoogleMapReact>
    </div>
  );
};


export default GMap;
