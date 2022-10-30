import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import data from "../../data";



const Map = () => {
	return (
		<MapContainer center={[33.7740868, -89.0411551]} zoom={5.5} scrollWheelZoom={false} zoomControl={false}>
			<TileLayer subdomains={['mt0','mt1','mt2','mt3']}
				attribution=' &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
			/>
			{data.offices.map((office, index) => <Marker key={`office${index}`} position={[office.lat, office.lng]}></Marker>)}
		</MapContainer>
	)
}

export default Map