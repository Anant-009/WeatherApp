import React, { useState } from "react";
import "./style.css";
import headdericon from "../images/headdericon.png";
import location from "../images/location.png";
import temperature from "../images/temperature.png";
import like from "../images/like.png";
import wea from "../images/wea.png";

function Weathercard() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const getWeather = async (event) => {
    event.preventDefault();
    const api_key = "5b0b59ad707f0a2343987cffe442d23c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="card-body">
          <h1 className="heading">
            <img src={headdericon} alt="img" />
            Weather or Not!
          </h1>
          <form onSubmit={getWeather}>
            <div className="form-group">
              <input
                type="text"
                className="location"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="submitbtn">
              <button className="button" type="submit">
                Get Weather
              </button>
            </div>
          </form>
          {weather && (
            <div className="display">
              <h2 className="subheadding">
                <img src={location} alt="img" />
                {weather.name}, {weather.sys.country}
              </h2>
              <div className="weatherdisplay">
                <div className="row">
                  <p className="temp">
                    <img src={temperature} alt="img" />
                    -Temperature:
                  </p>
                  <h3 className="tempdisp">{weather.main.temp}°C</h3>
                </div>
                <div className="row">
                  <p className="feels">
                    <img src={like} alt="img" />
                    -Feels Like:
                  </p>
                  <h3 className="feelsdisp">{weather.main.feels_like}°C</h3>
                </div>
                <div className="row">
                  <p className="weather">
                    <img src={wea} alt="img" />
                    -Weather:
                  </p>
                  <h3 className="weatherdisp">{weather.weather[0].main}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Weathercard;
