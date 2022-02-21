const Clima = ({ clima }) => {
  const {
    temperature,
    humidity,
    weather_icons,
    pressure,
    wind_dir,
    wind_speed,
    weather_descriptions,
  } = clima;
  const imgIcon = weather_icons[0];

  return (
    <div className="card-panel white col s12">
      <img src={imgIcon}></img>
      <h3>{weather_descriptions}</h3>
      <div >Temperatura:<span className="temperatura">{temperature}°C</span></div>
      <div>Humedad Relativa: {humidity}%</div>
      <div>Presión: {pressure} Pa</div>
      <div>
        Vientos: {wind_speed} Km/h {wind_dir}
      </div>
    </div>
  );
};

export default Clima;
