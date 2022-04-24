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

import raizen2Json from "../data/raizen2.geojson";

import * as data from "./seedlibraryData.json";

// import * as data from "../data/seedlibraryData.json";

// class SearchBox extends MapControl {
//   constructor(props) {
//     super(props);
//     props.leaflet.map.on("geosearch/showlocation", (e) =>
//       props.updateMarker(e)
//     );
//   }

//   createLeafletElement() {
//     const searchEl = GeoSearchControl({
//       provider: new OpenStreetMapProvider(),
//       style: "bar",
//       showMarker: true,
//       showPopup: false,
//       autoClose: true,
//       retainZoomLevel: false,
//       animateZoom: true,
//       keepResult: false,
//       searchLabel: "search",
//     });
//     return searchEl;
//   }
// }

// attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

//Latitude: -22.725, Longitude: -47.6476
// state = {
//   center: {
//     lat: 31.698956,
//     lng: 76.732407,
//   },
//   marker: {
//     lat: 31.698956,
//     lng: 76.732407,
//   },
//   zoom: 13,
//   draggable: true,
// };

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
  };

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

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];
    // const SearchBar = withLeaflet(SearchBox);

    const countryStyle = {
      fillColor: "red",
      fillOpacity: 1,
      color: "black",
      weight: 2,
    };
    return (
      <div className="map-root">
        <Map
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
        >
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
            style={countryStyle}
            data={raizen2Json.features}
            onEachFeature={onEachCountry}
          />

          {/* {data.features.map((seedlibrary) => (
            <Marker
              key={seedlibrary.properties.library_ID}
              position={[
                seedlibrary.geometry.coordinates[0],
                seedlibrary.geometry.coordinates[1],
              ]}
              animate={false}
            >
              <Popup>
                {seedlibrary.properties.location_name}
                {seedlibrary.properties.street}
                {seedlibrary.properties.zipcode}
                {seedlibrary.properties.city}
              </Popup>
            </Marker>
          ))} */}

          {/* <Marker
            draggable={true}
            onDragend={this.updatePosition}
            position={markerPosition}
            animate={true}
            ref={this.refmarker}
          >
            <Popup minWidth={90}>
              <span onClick={this.toggleDraggable}>
                {this.state.draggable ? "DRAG MARKER" : "MARKER FIXED"}
              </span>
            </Popup>
          </Marker> */}

          {/* <SearchBar updateMarker={this.updateMarker} /> */}
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
