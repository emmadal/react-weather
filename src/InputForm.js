import React, { useState } from "react";
import { Button, Input } from "./components";
import { PulseLoader } from "react-spinners";
import { css } from "@emotion/core";
import InfosWeather from "./InfosWeather";
import axios from "axios";
import "./App.css";

const baseUrl = "https://api.openweathermap.org/data/2.5/";
const override = css`
  display: block;
  margin: 30px;
  border-color: palevioletred;
`;

export const InputForm = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    sys: "",
    wind: "",
    main: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await axios.get(
      `${baseUrl}/weather?q=${city}&appid=bb4e4521bac8ebbd490409df984094ef&units=metric`
    );
    data.status === 200 ? setLoading(false) : setLoading(true);
    setWeather({ ...data.data });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="City (Ex: Abidjan)"
          onChange={handleInput}
          value={city}
          name="city"
        />
        <Button type="submit" disabled={city.length < 3}>
          Search
        </Button>
      </form>
      <hr color="#2b303b" style={{ width: "50%", height: "0.03em" }} />
      {loading ? (
        <PulseLoader size={60} color={"palevioletred"} css={override} />
      ) : (
        <InfosWeather weather={weather} />
      )}
    </React.Fragment>
  );
};
