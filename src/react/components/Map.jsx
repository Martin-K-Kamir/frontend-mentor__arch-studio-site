import {MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import data from "../../data";
import icon from '../../assets/icons/marker.svg';
import React, {useEffect, useRef} from "react";

const markerIcon = new L.Icon({
	iconUrl: icon,
	iconSize: [40, 40],
	iconAnchor: [20, 40],
});


const Map = () => {
	function setZoom() {
		if (window.document.body.clientWidth < 340) {
			return 4;
		} else if (window.document.body.clientWidth >= 340 && window.document.body.clientWidth < 768) {
			return 5;
		} else {
			return 6
		}
	}

	return (
		<MapContainer center={[33.2954109, -90.8790031]} zoom={setZoom()} scrollWheelZoom={false} zoomControl={false}>
			<TileLayer subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
			           attribution=' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			           url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
			/>
			{data.offices.map((office, index) => <Marker icon={markerIcon} key={`office${index}`} position={[office.lat, office.lng]}></Marker>)}
		</MapContainer>
	)
}

export default Map