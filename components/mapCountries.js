import React, { Component, createRef } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  MapControl,
  withLeaflet,
  MapEvents,
  GeoJSON,
} from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

// import raizen2Json from "../data/raizen2.geojson";

// import * as data from "./seedlibraryData.json";

import mapData from "../data/countries.json";

export default class MyMap extends Component {
  state = {
    center: {
      lat: -22.716429163372883,
      lng: -47.733471393585205,
    },
    marker: {
      lat: -22.716429163372883,
      lng: -47.733471393585205,
    },
    zoom: 23,
    draggable: true,
    color: "#ffff00",
  };

  colors = ["green", "blue", "yellow", "orange", "grey"];

  componentDidMount() {
    console.log(mapData);
  }

  refmarker = createRef(this.state.marker);

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updateMarker = (e) => {
    // const marker = e.marker;
    this.setState({
      marker: e.marker.getLatLng(),
    });
    console.log(e.marker.getLatLng());
  };

  // const position = [this.state.center.lat, this.state.center.lng];
  // const markerPosition = [this.state.marker.lat, this.state.marker.lng];
  // // const SearchBar = withLeaflet(SearchBox);

  countryStyle = {
    fillColor: "red",
    fillOpacity: 1,
    color: "black",
    weight: 2,
  };

  printMesssageToConsole = (event) => {
    console.log("Clicked");
  };

  changeCountryColor = (event) => {
    event.target.setStyle({
      color: "green",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);

    layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
    // const colorIndex = Math.floor(Math.random() * this.colors.length);
    // layer.options.fillColor = this.colors[colorIndex]; //0

    layer.on({
      click: this.changeCountryColor,
    });
  };

  colorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div className="map-root">
        {/* <Map
          center={position}
          zoom={this.state.zoom}
          style={{
            fillColor: "red",
            fillOpacity: 1,
            color: "black",
            weight: 2,
            height: "700px",
            // width: "400px",
          }}
        > */}

        <Map style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
          <TileLayer
            attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            url="https://api.mapbox.com/styles/v1/viannaandresouza/cl2cow8rn000414lk7kon03nk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidmlhbm5hYW5kcmVzb3V6YSIsImEiOiJja2hpOTVrcnowdmxoMnFzMXE5end6MXlyIn0.eP2vC12qAfS11lzLU_F0Rg"
          />

          {/* <script>L.geoJSON(raizen2JSON).addTo(map)</script>
          <Marker position={L.geoJSON(raizen2JSON)}></Marker>

          <GeoJSON
            style={this.countryStyle}
            data={raizen2Json.features}
            onEachFeature={this.onEachCountry}
          /> */}

          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachCountry}
            // onEachFeature={onEachCountry}
          />
        </Map>
        <style jsx>
          {`
            .map-root {
              height: 100%;
            }
            .leaflet-container {
              height: 400px !important;
              width: 80%;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    );
  }
}
