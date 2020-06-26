import React from "react";
import "./App.css";

export default function InfosWeather(props) {
  const {
    name,
    sys: { country },
    wind: { speed },
    main: { humidity, temp },
  } = props.weather;

  if (name) {
    return (
      <React.Fragment>
        <h2>{`${name}, ${country}`}</h2>
        {country ? (
          <img
            src={`https://www.countryflags.io/${country}/flat/64.png`}
            alt={country}
            title={country}
          />
        ) : (
          ""
        )}
        <h4>
          Wind: {speed} km/h, Humidity: {humidity} %, Description:{" "}
          {props.weather.weather[0].description}
        </h4>
        <div className="temp">
          <h1>{`${temp}° C`}</h1>{" "}
          <img
            src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
            alt={`${props.weather.weather[0].description}`}
          />
        </div>
      </React.Fragment>
    );
  }
  return null;
}
