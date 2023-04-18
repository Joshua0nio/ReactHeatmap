import React, { useState } from "react";
import { GoogleMap, useLoadScript, HeatmapLayer } from "@react-google-maps/api";

const containerStyle = {
	width: "1900px",
	height: "900px",
};

const center = {
	lat: 14.5792,
	lng: 121.0359,
};
const googleApi = "AIzaSyBY02OUe-MycQkDSpFvc3w9Qrab5mA7uz4";
function App() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: googleApi,
		libraries: ["visualization"],
	});

	const [map, setMap] = useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		setTimeout(() => {
			map.fitBounds(bounds);
		}, 100);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	if (!isLoaded) {
		return <div>Loading</div>;
	}

	const heatmapData = [
		{ location: new window.google.maps.LatLng(14.5792, 121.0359), weight: 1 },
		{ location: new window.google.maps.LatLng(14.5803, 121.0382), weight: 2 },
		{ location: new window.google.maps.LatLng(14.5815, 121.0345), weight: 3 },
		{ location: new window.google.maps.LatLng(14.5816, 121.0388), weight: 4 },
		{ location: new window.google.maps.LatLng(14.5829, 121.0388), weight: 5 },
		{ location: new window.google.maps.LatLng(14.5822, 121.0372), weight: 6 },
	];

	return (
		<div>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				<HeatmapLayer // optional
					data={heatmapData}
					options={{ radius: 20, opacity: 0.6 }}
				/>
			</GoogleMap>
		</div>
	);
}

export default App;
