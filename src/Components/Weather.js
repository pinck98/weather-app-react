import React from "react";
import image from "../images/Asset 20.svg";

function Weather(props) {
  let x = props.tempretaure.toString();
  let v = x.charAt(0) + x.charAt(1) + "." + x.charAt(2);

  return (
    <div id="infoCon">
      {props.city && (
        <div id="city">
          <p>
            <i className="bx bxs-map"></i> {props.city}
          </p>
        </div>
      )}

      {props.country && (
        <div id="country">
          <p>/ {props.country}</p>
        </div>
      )}

      {props.description && (
        <div id="imgStatus">
          <img src={image}  alt='weather icon'/>
        </div>
      )}

      {props.description && (
        <div id="description">
          <p>{props.description}</p>
        </div>
      )}

      {props.tempretaure && (
        <div id="temp">
          <p>
            {v + "°"}
            {console.log(typeof x)}
          </p>
        </div>
      )}

      {props.wind && props.humidity && (
        <div id="windAndHumidity">
          <p id="wind">
            <i className="bx bx-wind"></i> {props.wind + " km/h"}
          </p>
          <p id="humidity">
            <i className="bx bx-droplet"></i> {props.humidity + " %"}
          </p>
        </div>
      )}



      {props.error && (
        <div id="error">
          <p>{props.error}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
