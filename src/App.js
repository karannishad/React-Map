import React, { Component } from "react";

import "./App.css";
import "mapbox-gl/dist/mapbox-gl.css";
import MapComponent from "./components/mapcomponent";
class App extends Component {
  render() {
    return <MapComponent />;
  }
}

export default App;
