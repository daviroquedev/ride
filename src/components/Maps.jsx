import React, { useState, useEffects } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../../src/index.css';
import LocationMarker from "./LocationMarker";




function Maps() {
    // const [locazicao, setLocalizacao] = useState("[-3.738704, -38.524289]")


    // const getLocation = () => {
    //     if (!navigator.geolocation)
    //         return null;
    //     navigator.geolocation.getCurrentPosition((pos) => {
    //         const lat = pos.coords.latitude
    //         const long = pos.coords.longitude
    //         console.log(`isso é latitude${lat}`)
    //         console.log(`isso é longitude ${long}`)
    //     })
    // }
    // getLocation()
   
   

    const position = [-3.738704, -38.524289]

    return (
        <MapContainer
        center={{ lat: -3.738704, lng: -38.524289 }}
        zoom={13}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    );
}

export default Maps;

