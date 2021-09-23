import React, { useState } from "react";
import Input from './Input';
import { useSelector } from 'react-redux';


const Display = () => {
  // const [Weather, setWeather] = useState({});
  // const [val, setVal] = useState(null);
  // const getData = () => {
  //   fetch(
  //     `http://api.weatherapi.com/v1/current.json?key=3b30c57f7d77448a8c9195735210808&q=${val}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeather(data);
  //     });
  // };

  const Weather = useSelector((state) => state.data);
  
  return (
    <div className="container">
      <Input />
      {/* <div className="inputs">
        <input
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button onClick={getData}>Search</button>
      </div> */}

      <div className="info">
        {Weather.location ? (
          <div>
            <h2>
              {Weather.location.name},{Weather.location.country}{" "}
            </h2>
            <img src={Weather.current.condition.icon} alt="no image" />
            <h2> {Weather.current.temp_c}°C </h2>
            <div>
              <h4>Wind: {Weather.current.wind_kph} kph</h4>
              <h4>Precepitation: {Weather.current.precip_mm} mm</h4>
              <h4>Pressure: {Weather.current.pressure_mb} mb</h4>
            </div>
            <h2> {Weather.current.condition.text} </h2>
            <h2> </h2>
          </div>
        ) : (
          <h2>Data not Found.</h2>
        )}
      </div>
    </div>
  );
};
export default Display;
