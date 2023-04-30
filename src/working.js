import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
	"pk.eyJ1IjoiZ2VvbGFwaXRhbiIsImEiOiJjbGdrcmZtbzQwNDdwM2VvbTM0ZzJ0a3JpIn0.rnsTTMjiWn6I-0GB6CG_xQ";

function Heatmap() {
	const [viewport, setViewport] = useState({
		width: "100vw",
		height: "100vh",
		latitude: 14.5794,
		longitude: 121.0359,
		zoom: 14,
	});

	const data = [
		{ position: [121.0397, 14.5832], weight: 0.2 },
		{ position: [121.0327, 14.5833], weight: 0.5 },
		{ position: [121.0319, 14.5788], weight: 0.6 },
		{ position: [121.0354, 14.5782], weight: 0.8 },
		{ position: [121.0356, 14.5767], weight: 0.4 },
		{ position: [121.0318, 14.5762], weight: 0.3 },
		{ position: [121.0321, 14.5801], weight: 0.1 },
		{ position: [121.0384, 14.5764], weight: 0.7 },
		{ position: [121.0347, 14.5823], weight: 0.9 },
		{ position: [121.0376, 14.5788], weight: 0.2 },
		{ position: [121.0378, 14.5819], weight: 0.5 },
		{ position: [121.0366, 14.5825], weight: 0.3 },
		{ position: [121.0358, 14.5797], weight: 0.6 },
		{ position: [121.0379, 14.5759], weight: 0.8 },
		{ position: [121.0357, 14.5755], weight: 0.4 },
	];
	const layer = new HeatmapLayer({
		id: "heatmap-layer",
		data,
		getPosition: (d) => d.position,
		getWeight: (d) => d.weight,
		radiusPixels: 30,
	});

	return (
		<div style={{ height: "100vh" }}>
			<ReactMapGL
				{...viewport}
				scrollZoom={true}
				mapboxAccessToken={MAPBOX_TOKEN}
				mapStyle="mapbox://styles/geolapitan/clgkrs8hf000801pz7xi6a3ih"
				onViewportChange={(viewport) => setViewport(viewport)}
			>
				<DeckGL {...viewport} layers={[layer]} />
			</ReactMapGL>
		</div>
	);
}

export default Heatmap;
