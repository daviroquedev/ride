import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../src/index.css';




function Maps() {


    const getLocation = () => {
        if (!navigator.geolocation)
            return null;
        navigator.geolocation.getCurrentPosition((pos) => {
            const lat = pos.coords.latitude
            const long = pos.coords.longitude
            console.log(`isso é latitude${lat}`)
            console.log(`isso é longitude ${long}`)
        })
    }
    getLocation()
   
   

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

