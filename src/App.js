import "./App.css";
import React, { Component } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "43c033e989197cf3f3f0bafadf16fbfc";
//http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
class App extends Component {
  constructor() {
    super();

    this.state = {
      tempretaure: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      wind: "",
      error: "",
    };
  }

  //get weather
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);

    if (data.cod === '404') {
      this.setState({
        tempretaure: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        wind: "",
        error: "Enter a vaild city and country name",
      });
    }else if (city && country ){
      this.setState({
        tempretaure: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: "",
      });
    }
     else {
      this.setState({
        tempretaure: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        wind: "",
        error: "Enter a vaild city and country name",
      });
    }
  };

  render() {
    return (
      <div id='con'>
        <Weather
          tempretaure={this.state.tempretaure}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        />
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
