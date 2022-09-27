import React, {useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../src/index.css';
import { Icon } from "leaflet";


function Maps() {
  return (
    <MapContainer center={[-3.738704, -38.524289]} zoom={16}scrollWheelZoom={true}>

      <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
}

export default Maps;

