import React, { useState } from "react";

const Formulario = ({ ciudad, setCiudad, pais, setPais, setConsulta }) => {
  //hooks
  const [error, setError] = useState(false);

  //funciones
  const handleSubmit = (e) => {
    e.preventDefault();
    setConsulta(false);
    if (ciudad === "" || pais === "") {
      setError(true);
      return;
    }
    setError(false);
    setTimeout(() => {
      setConsulta(true);
    }, 2000);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {error && (
        <div className="red darken-4 error">
          Todos los campos son obligatorios
        </div>
      )}
      <div className="input-field col s12">
        <input
          type="text"
          name="ciudad"
          id="ciudad"
          value={ciudad}
          onChange={(e) => setCiudad(e.target.value)}
        />
        <label htmlFor="ciudad">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="pais"
          id="pais"
          onChange={(e) => setPais(e.target.value)}
          value={pais}
        >
          <option value="">--Seleccione un país--</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
          <option value="CU">Cuba</option>
          <option value="EC">Ecuador</option>
        </select>
        <label id="pais">País:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar Clima"
          className="btn waves-effect waves-light btn-large btn-block yellow accent-4 "
        />
      </div>
    </form>
  );
};

export default Formulario;
