import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

class MapComponent extends Component {
  state = {
    viewport: {
      width: 1200,
      height: 700,
      latitude: 37.78,
      longitude: -122.41,
      zoom: 8
    }
  };
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic2hhbmUtcGlvbmVlciIsImEiOiJjampyN2YwZ3MzeGQxM3JteGh6YWM3Yj" +
          "g5In0.joFZOIVkzx9ZVpX5B0BsZA"
        }
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Marker
          latitude={37.78}
          longitude={-122.41}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default MapComponent;
