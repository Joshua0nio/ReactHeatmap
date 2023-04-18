import React, { Component } from "react";
import { Loader } from "@googlemaps/js-api-loader";

class Heatmap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			map: null,
			heatmapLayer: null,
		};
	}

	componentDidMount() {
		const loader = new Loader({
			apiKey: "AIzaSyBY02OUe-MycQkDSpFvc3w9Qrab5mA7uz4",
			version: "weekly",
			libraries: ["visualization"],
		});

		loader.load().then(() => {
			const map = new window.google.maps.Map(document.getElementById("map"), {
				center: { lat: 14.5837, lng: 121.0364 },
				zoom: 13,
			});

			const heatmapLayer = new window.google.maps.visualization.HeatmapLayer({
				map,
				data: this.generateHeatmapData(),
			});

			this.setState({ map, heatmapLayer });
		});
	}

	generateHeatmapData() {
		const dataPoints = [
			{ lat: 14.5673, lng: 121.0351 },
			{ lat: 14.5714, lng: 121.0414 },
			{ lat: 14.5837, lng: 121.0364 },
			{ lat: 14.5792, lng: 121.0401 },
			{ lat: 14.5816, lng: 121.0246 },
			{ lat: 14.5783, lng: 121.0322 },
			{ lat: 14.5806, lng: 121.0422 },
			{ lat: 14.5751, lng: 121.0327 },
			{ lat: 14.5773, lng: 121.0386 },
			{ lat: 14.5854, lng: 121.0394 },
			{ lat: 14.5709, lng: 121.0371 },
			{ lat: 14.5736, lng: 121.0436 },
			{ lat: 14.5872, lng: 121.0312 },
			{ lat: 14.5817, lng: 121.0437 },
			{ lat: 14.5687, lng: 121.0256 },
			{ lat: 14.5849, lng: 121.0292 },
			{ lat: 14.5842, lng: 121.0346 },
			{ lat: 14.5721, lng: 121.0457 },
			{ lat: 14.5837, lng: 121.0517 },
			{ lat: 14.5781, lng: 121.0384 },
		];

		const maxHeat = 3; // set the maximum heat intensity
		const dataCount = dataPoints.length;
		const heatStep = maxHeat / dataCount;

		const heatmapData = dataPoints.map(({ lat, lng }, index) => ({
			location: new window.google.maps.LatLng(lat, lng),
			weight: (index + 1) * heatStep, // increase heat intensity based on the index
		}));

		return heatmapData;
	}

	render() {
		return (
			<>
				<div id="map" style={{ height: "500px" }}></div>
			</>
		);
	}
}

export default Heatmap;
