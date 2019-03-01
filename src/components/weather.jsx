import React, { Component } from "react";
import axios from "react-axios";
class Weather extends Component {
  state = { hits: null };
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?appid=0e905341f5cd08780ca11a2ec8fbe8cd&id=524901"
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return <h1>{this.state.data}</h1>;
  }
}

export default Weather;
