import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from '../assets/icon-location.svg'
import styled from 'styled-components';

function Content() {
  const position: any = [41.6931, 44.79231];
    const icon = new Icon({
      iconUrl: markerIcon,
      iconSize: [24, 34],
      iconAnchor: [12, 41],
    });
  

 
  return (
    <>
    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100vw', height: '75vh', zIndex:1 }}
      
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker position={position} icon={icon} />
    </MapContainer>
      </>
  );
}

export default Content;

