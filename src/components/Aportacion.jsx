import { useState } from "react";

import Saldo from "./Saldo";


function Aportacion({aPagar}) {

    let [cantidadAportada, setCantidadAportada] = useState(0);
    let [valorSaldo, setValorSaldo] = useState(0);
    /*let [pagoIntroducido, setPagoIntroducido] = useState(0);*/

    function calcularSaldo(){
        setValorSaldo (cantidadAportada - aPagar);
    };

    function manejadorIntroducirPago(event){
    
    let textoIntroducido = event.target.value
    /*if (/^[0-9]*\.?[0-9]{0,2}$/.test(textoIntroducido) === true){
        setPagoIntroducido (textoIntroducido);
        console.log("Pago introducido en el else", pagoIntroducido)
          setCantidadAportada(parseFloat(pagoIntroducido));
    } else {
        console.log("letras!!")
            event.target.value = pagoIntroducido;
    };*/

        let pagoIntroducido = parseFloat(event.target.value);
        console.log("Pago introducido antes del if", pagoIntroducido)
        if (isNaN(pagoIntroducido) === true)
         {
            console.log("Pago introducido en el if", pagoIntroducido)
            event.target.value = "";
            pagoIntroducido = 0;
        } else 
        console.log("Pago introducido en el else", pagoIntroducido)
          setCantidadAportada(pagoIntroducido);
      };

      function manejadorBotonConfirmar(){
        calcularSaldo();
          console.log("precio persona", aPagar)
          console.log("lo que paga", cantidadAportada)
          console.log("saldo disponible", valorSaldo)
      };


    return (
        <div>
            <input type="text" placeholder="Nombre"></input>
            <input type="text" maxLength={5} placeholder="Aportación €" 
                onInput={manejadorIntroducirPago}
                onKeyDown={()=>console.log("haroa")}
            >

            </input>

            <p>{aPagar}</p>
            <button onClick={manejadorBotonConfirmar}>Confirmar pago</button>
            <Saldo saldo={valorSaldo}/>
        </div>
    );

};

export default Aportacion;