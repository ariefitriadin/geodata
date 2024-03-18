// components/MapData.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { GeoJsonFeatureCollection } from '@/app/lib/definitions'
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';

interface GoogleMapProps {
    polygonData: google.maps.PolygonOptions[];
}

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const center = {
    lat: 0,
    lng: 0,
};
  
export default function MapData({ geoJsonData }: { geoJsonData: GeoJsonFeatureCollection }) {

    const mapRef = useRef<google.maps.Map | null>(null);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.data.addGeoJson(geoJsonData);
        }
    }, [geoJsonData]);
    }
 
    return (
        <MapContainer
            style={{ height: '400px', width: '100%' }}
            center={[0, 0]} // Initial center coordinates  
            zoom={2} // Initial zoom level  
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={geoJsonData as GeoJSON.GeoJsonObject} />
        </MapContainer>
    );
};







