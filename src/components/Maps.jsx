import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../src/index.css';
import { Icon } from "leaflet";


function Maps() {
    
    const position = [-3.738704, -38.524289]

    return (
        <MapContainer center={[-3.738704, -38.524289]} zoom={16} scrollWheelZoom={true}>

            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                   Estou precisando de carona nessa proximidade
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Maps;

