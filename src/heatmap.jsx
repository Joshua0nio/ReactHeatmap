import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";

const MapContainer = () => {
	const [viewport, setViewport] = useState({
		latitude: 37.7749,
		longitude: -122.4194,
		zoom: 11,
	});

	const data = [
		{ position: [-122.4194, 37.7749], weight: 0.5 },
		{ position: [-122.4194, 37.7749], weight: 0.5 },
		{ position: [-122.4312, 37.7735], weight: 1 },
		{ position: [-122.4312, 37.7735], weight: 1 },
		{ position: [-122.4088, 37.751], weight: 0.2 },
		{ position: [-122.4088, 37.751], weight: 0.2 },
	];

	const layer = new HeatmapLayer({
		id: "heatmap",
		data: data,
		getPosition: (d) => d.position,
		getWeight: (d) => d.weight,
		radiusPixels: 30,
	});

	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyBY02OUe-MycQkDSpFvc3w9Qrab5mA7uz4" }}
				defaultCenter={viewport}
				defaultZoom={viewport.zoom}
				onViewportChange={setViewport}
			>
				<DeckGL
					viewState={viewport}
					layers={[layer]}
					getTooltip={({ object }) =>
						object && {
							text: `Weight: ${object.weight}`,
							style: {
								backgroundColor: "#555",
								color: "#fff",
								fontSize: "0.8em",
								borderRadius: "4px",
								padding: "4px",
							},
						}
					}
				/>
			</GoogleMapReact>
		</div>
	);
};
console.log(MapContainer);
export default MapContainer;
