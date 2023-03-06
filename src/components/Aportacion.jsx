import { useEffect, useState } from "react";

import Saldo from "./Saldo";
import styles from "./Aportacion.module.css";
import iconoPersona from "../images/icono_persona.png";


function Aportacion({aPagar}) {

    let [cantidadAportada, setCantidadAportada] = useState(0);
    let [valorSaldo, setValorSaldo] = useState(0);

    function manejadorIntroducirPago(event){

        const textoAlmacenado = cantidadAportada;

        if (/^[0-9]*\.?[0-9]{0,2}$/.test(event.target.value) === true) {
            setCantidadAportada(event.target.value);
        } 
        else {
            event.target.value = textoAlmacenado;
        };  

    };

    useEffect (
            ()=>{
                if (isNaN(parseFloat(cantidadAportada)) === true) {
                    setValorSaldo(0);
                } else {
                setValorSaldo(parseFloat(cantidadAportada) - aPagar);
                }
            },
            [cantidadAportada]
            )


    return (
        <div className={styles.entradaPersona}>
            <img src={iconoPersona} alt="icono.png" />
            <input className={styles.nombre} type="text" placeholder="Nombre"></input>
            <input className={styles.aportacionEuros} type="text" maxLength={5} placeholder="Pago €" onInput={manejadorIntroducirPago}>
            </input>
            {/*<p>{aPagar}</p>*/}
            <Saldo saldo={valorSaldo}/>
        </div>
    );

};

export default Aportacion;