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
	customId: "marker",
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

	function handleClick(e) {
		const lat = e.latlng.lat;
		const lng = e.latlng.lng;
		window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
	}

	return (
		<MapContainer center={[33.2954109, -90.8790031]} zoom={setZoom()} scrollWheelZoom={false} zoomControl={false}>
			<TileLayer subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
			           attribution=' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			           url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
			/>
			{data.offices.map((office, index) => (
				<Marker eventHandlers={{click: (e) => {handleClick(e)},}} icon={markerIcon} key={`office${index}`} uniqueID={office.id} position={[office.lat, office.lng]}></Marker>
			))}
		</MapContainer>
	)
}

export default Map