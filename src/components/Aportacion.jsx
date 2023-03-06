import { useState } from "react";

import Saldo from "./Saldo";


function Aportacion({aPagar}) {

    let [cantidadAportada, setCantidadAportada] = useState(0);
    let [valorSaldo, setValorSaldo] = useState(0);
    let [textoAlmacenado, setTextoAlmacenado] = useState(0);

    function calcularSaldo(){
        setValorSaldo (parseFloat(cantidadAportada) - aPagar);
    };


    function manejadorIntroducirPago(event){

        let textoIntroducido = event.target.value

        if (/^[0-9]*\.?[0-9]{0,2}$/.test(textoIntroducido) === true){
            setTextoAlmacenado(textoIntroducido);
            setCantidadAportada(textoIntroducido);
            console.log("Texto introducido", textoIntroducido)
            console.log("Pago introducido", textoAlmacenado)
            
        } else {
            console.log("Letras", textoAlmacenado)
                event.target.value = textoAlmacenado;
            };  
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