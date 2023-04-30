import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import ReactMapGL from "react-map-gl";

const MAPBOX_TOKEN = "pk.eyJ1IjoiZ2VvbGFwaXRhbiIsImEiOiJjbGdnNGI3MmcwODJtM2psaWxsa2c4cTB3In0.trwh2peO_0VWIFJ2qNgSCA";

function Heatmap() {
	const [viewport, setViewport] = useState({
		width: "100vw",
		height: "100vh",
		latitude: 37.7577,
		longitude: -122.4376,
		zoom: 11,
	});

	const data = [
		{ position: [-122.4194, 37.7749], weight: 0.2 },
		{ position: [-122.4156, 37.7749], weight: 0.5 },
		{ position: [-122.4156, 37.7772], weight: 0.6 },
		{ position: [-122.4179, 37.7768], weight: 0.8 },
		{ position: [-122.4168, 37.7762], weight: 0.4 },
		{ position: [-122.4164, 37.7755], weight: 0.3 },
		{ position: [-122.4163, 37.7748], weight: 0.1 },
		{ position: [-122.4172, 37.7749], weight: 0.7 },
		{ position: [-122.4172, 37.7764], weight: 0.9 },
		{ position: [-122.4175, 37.7755], weight: 0.2 },
		{ position: [-122.4181, 37.7758], weight: 0.5 },
		{ position: [-122.4185, 37.7764], weight: 0.3 },
		{ position: [-122.4182, 37.7772], weight: 0.6 },
		{ position: [-122.4175, 37.7775], weight: 0.8 },
		{ position: [-122.4171, 37.7768], weight: 0.4 },
	];

	const layer = new HeatmapLayer({
		id: "heatmap-layer",
		data,
		getPosition: (d) => d.position,
		getWeight: (d) => d.weight,
		radiusPixels: 30,
	});

	return (
		<ReactMapGL
			{...viewport}
			mapboxApiAccessToken={MAPBOX_TOKEN}
			onViewportChange={(nextViewport) => setViewport(nextViewport)}
		>
			<DeckGL {...viewport} layers={[layer]} />
		</ReactMapGL>
	);
}

export default Heatmap;
