import { useEffect, useState } from "react";

import "./App.css"

import Aportacion from "./components/Aportacion";
import InputDinero from "./components/InputDinero";

function App() {

  let [precioPersona, setPrecioPersona] = useState(20);
  let [numeroPersonas, setNumeroPersonas] = useState(1);
  let [precioTotal, setPrecioTotal] = useState(0);
  const [listaPersonas, setListaPersonas] = useState([])

  const iconoTitulo = "🍴"
  const iconoBillete = "💵"

  function manejadorSlider(event){
    setNumeroPersonas(event.target.value);
  };


  useEffect(
    ()=>{
      setPrecioPersona(precioTotal/numeroPersonas);

      const nuevaPersona = []
            let contador = 0
            while (contador < numeroPersonas) {
                const nombrePersona = "Nombre Comensal " + (contador+1);
                nuevaPersona.push(<Aportacion aPagar={precioPersona} textoNombre={nombrePersona} key={contador}/>)
                contador++
                
            }
            setListaPersonas(nuevaPersona)

    },
    [precioTotal, numeroPersonas, precioPersona]
  );

  return (
    <div className="contenedor-flex">
        <h1>{iconoTitulo} Pagando a Escote {iconoTitulo}</h1>
        <div className="intro-datos">
            <label>
              <input type="range" min="1" max="20" value={numeroPersonas} onChange={manejadorSlider} list="personas"/>
            </label>
            <datalist id="personas">
                <option value="1"></option>
                <option value="5"></option>
                <option value="10"></option>
                <option value="15"></option>
                <option value="20"></option>
            </datalist>     
            <div className="la-cuenta">
                <p>Somos {numeroPersonas}</p>
                <InputDinero cantidad={precioTotal} setCantidad={setPrecioTotal} texto="Total €" />
            </div>
        </div>
      <p className="precio-persona">
        {iconoBillete} Sale a <span>{precioPersona.toFixed(2)} €</span> por persona {iconoBillete}
      </p>
      {listaPersonas}
    </div>
  );
}

export default App;
