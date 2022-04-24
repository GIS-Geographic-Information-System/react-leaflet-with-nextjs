import * as React from "react";


import Nav from '../components/nav'
import Head from '../components/head'


import dynamic from 'next/dynamic';


function Home(){
  const home = "Countries"
  const MapWithNoSSR = dynamic(() => import('../components/mapSmartSeeds'), {
    ssr: false
  });
  const position = {
    center: {
      lat: -22.725,
      lng: -47.6476,
    },
    marker: {
      lat: -22.725,
      lng: -47.6476,
    },
    zoom: 13,
    draggable: true,
  };

  const zoomMap= 13;

  return(
    <div>
    <Head title="Countries" />
    <Nav />
      <span>{home}</span>
      <div>
     <MapWithNoSSR />
    </div>
      {/* <div className="map-root">
        <Map
          center={position}
          zoom={zoomMap}
          style={{
            height: "700px",
            // width: "400px",
          }}
        >
          <TileLayer
            attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>"
            url="https://api.mapbox.com/styles/v1/viannaandresouza/cl2cow8rn000414lk7kon03nk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidmlhbm5hYW5kcmVzb3V6YSIsImEiOiJja2hpOTVrcnowdmxoMnFzMXE5end6MXlyIn0.eP2vC12qAfS11lzLU_F0Rg"
          />

          {data.features.map((seedlibrary) => (
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
          ))}

          <Marker
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
          </Marker>

          <SearchBar updateMarker={this.updateMarker} />
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
      </div> */}

      {/* <SmartSeeds/> */}
    </div>
  )
}



export default Home;
