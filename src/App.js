import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";

function App() {
  //hooks
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [consulta, setConsulta] = useState(false);
  const [clima, setClima] = useState(null);

  useEffect(() => {
    if (consulta) {
      consultarAPI();
    }
  }, [consulta]);

  //funciones
  const consultarAPI = async () => {
    // consulta en open weathermap
    //const url = `http://api.openweathermap.org/data/2.5/weather?q=${cuidad},${pais}&APPID=b35ba9547a37f28e4924549aec80f120`;
    const url = `http://api.weatherstack.com/current?access_key=0ebbcc2f3293e7cdc44f6a00dccd8cc6&query=${ciudad}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    setClima(resultado.current);
  };

  return (
    <>
      <Header titulo={"Clima React"}></Header>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                ciudad={ciudad}
                setCiudad={setCiudad}
                pais={pais}
                setPais={setPais}
                setConsulta={setConsulta}
              />
            </div>
            {clima && (
              <div className="col m6 s12">
                <Clima clima={clima} ciudad={ciudad} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
