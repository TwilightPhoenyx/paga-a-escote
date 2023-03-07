import { useEffect, useState } from "react";

import "./App.css"

import Aportacion from "./components/Aportacion";
import InputDinero from "./components/InputDinero";

function App() {

  let [precioPersona, setPrecioPersona] = useState(20);
  let [numeroPersonas, setNumeroPersonas] = useState(1);
  let [precioTotal, setPrecioTotal] = useState(0);
  const [listaPersonas, setListaPersonas] = useState([])

  function manejadorSlider(event){
    setNumeroPersonas(event.target.value);
  };


  useEffect(
    ()=>{
      setPrecioPersona(precioTotal/numeroPersonas);

      const nuevaPersona = []
            let contador = 0
            while (contador < numeroPersonas) {
                nuevaPersona.push(<Aportacion aPagar={precioPersona}/>)
                contador++
            }
            setListaPersonas(nuevaPersona)

    },
    [precioTotal, numeroPersonas, precioPersona]
  );

  return (
    <div>
        <input type="range" min="1" max="20" onChange={manejadorSlider} list="personas"></input>
        <datalist id="personas">
            <option value="1" label="1"></option>
            <option value="5" label="5"></option>
            <option value="10" label="10"></option>
            <option value="15" label="15"></option>
            <option value="20" label="20"></option>
        </datalist>     

        <p>Comensales: {numeroPersonas}</p>
        <InputDinero cantidad={precioTotal} setCantidad={setPrecioTotal} texto="Total €" />
        <p>Precio a pagar por cabeza: {precioPersona.toFixed(2)}</p>
        {listaPersonas}
    </div>
  );
}

export default App;
