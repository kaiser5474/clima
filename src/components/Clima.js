const Clima = ({ clima, ciudad }) => {
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
      <div className="textoCiudad">El clima de {ciudad}</div>
      <div className="encabezado">
        <img src={imgIcon} />
        <div>{weather_descriptions}</div>
      </div>

      <div>
        <span className="temperatura">{temperature}°C</span>
      </div>
      <div className="textoPropiedades">
        Humedad Relativa:{" "}
        <span className="textoValorPropiedades">{humidity}%</span>
      </div>
      <div className="textoPropiedades">
        Presión: <span className="textoValorPropiedades">{pressure} Pa</span>
      </div>
      <div className="textoPropiedades ultimaPropiedad">
        Vientos:{" "}
        <span className="textoValorPropiedades ">
          {wind_speed} Km/h {wind_dir}
        </span>
      </div>
    </div>
  );
};

export default Clima;
