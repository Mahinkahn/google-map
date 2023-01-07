import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 23.807250118712297,
    lng: 90.36897335207053
};

function MyComponent() {
    return (
        <LoadScript
            googleMapsApiKey="YOUR_API_KEY"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker
                    position={center}
                />

            </GoogleMap>
        </LoadScript>
    )
}


export default React.memo(MyComponent)
