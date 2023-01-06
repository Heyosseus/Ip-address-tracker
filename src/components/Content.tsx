import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
function Content() {
  const position: any = [44.1231, 45.31231];
  fetch(
    'https://geo.ipify.org/api/v2/country?apiKey=at_2NiRIrLpgf3LYLpAwm3VhOfGVjwxK&ipAddress=8.8.8.8'
  )
    .then((res) => res.json())
    .then((res) => res.ip())
    .catch(err=>console.error(err));
  return (
    <MapContainer
      center={position}
      zoom={10}
      style={{ width: '100vw', height: '75vh' }}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
    </MapContainer>
  );
}

export default Content;
