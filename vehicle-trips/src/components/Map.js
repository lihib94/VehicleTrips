import Map, { Source, Layer } from 'react-map-gl';
import { useEffect, useRef } from 'react';

const MapComponent = ({ points }) => {

    const mapRef = useRef();

    //center point to start the map with
    const center = {
        longitude: 32.8164,
        latitude: 35.13748,
        zoom: 12
    }
    // mapping through the points and insert to an array
    const coordinatesArray = points.map(point => {
        return [point.latitude, point.longtitude]
    })

    //data for "source" component 
    const dataOne = {
        type: "Feature",
        properties: {},
        geometry: {
            type: "LineString",
            coordinates: coordinatesArray,
        }
    };

    //when changing the points to a new route, set a new center that will match the new route
    useEffect(() => {
        if (mapRef && mapRef.current && points) {
            console.log(points[0])
            mapRef.current.setCenter([points[0].latitude, points[0].longtitude])
        }
    }, [points]);

    return <Map
        ref={mapRef}
        initialViewState={center}
        style={{ width: '100vw', height: '100vh' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoibGloaWIiLCJhIjoiY2wzb2JvcXltMDBuMzNpdDdlODA5eDRuZCJ9.lHYh-8Z4qGM4FRti514i7w"
    >
        <Source id="polylineLayer" type="geojson" data={dataOne}>
            <Layer
                id="lineLayer"
                type="line"
                source="my-data"
                layout={{
                    "line-join": "round",
                    "line-cap": "round"
                }}
                paint={{
                    "line-color": "#23a0b0",
                    "line-width": 5
                }}
            />
            <Layer
                id="circle"
                type="circle"
                source="my-data"
                paint={{ 'circle-color': '#EE1F1F', }}
            />
        </Source>
    </Map>;
}
export default MapComponent