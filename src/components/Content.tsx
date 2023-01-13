import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/icon-location.svg';
import { useEffect, useRef, useState } from 'react';

interface Props {
  lat: number;
  lng: number;
}

const Content = (props: Props) => {
  const [center, setCenter] = useState<[number, number]>([
    props.lat,
    props.lng,
  ]);

  useEffect(() => {
    setCenter([props.lat, props.lng]);
  }, [props.lat, props.lng]);

  const icon = new Icon({
    iconUrl: markerIcon,
    iconSize: [24, 34],
    iconAnchor: [12, 41],
  });

  function ChangeView(props: any) {
    const map = useMap();
    map.setView(props.center);
    return null;
  }

  return (
    <>
      <MapContainer
        center={center}
        zoom={14}
        style={{ width: '100vw', height: '75vh', zIndex: 1 }}
      >
        <ChangeView center={[props.lat, props.lng]} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={icon} />
      </MapContainer>
    </>
  );
};

export default Content;
