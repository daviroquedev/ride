import { useState, useRef, useMemo, useCallback} from 'react'
import { Marker,useMapEvents,Popup } from 'react-leaflet'

export default function LocationMarker() {

    const [position, setPosition] = useState(null)
    const [draggable, setDraggable] = useState(false)
    const markerRef = useRef(null)

    const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
              setPosition(marker.getLatLng())
            }
          },
        }),
        [],
      )
      const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
      }, [])
    

    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker
         position={position}
         draggable={draggable}
         eventHandlers={eventHandlers}
         ref={markerRef}

         >
            <Popup className=''><span onClick={toggleDraggable}>
          {draggable
            ? 'Arraste o marcador para a sua posição'
            : 'Clique aqui e depois arraste o marcador para a sua posição.'}
            {console.log(position)}

        </span></Popup>
        </Marker>
    )
}
