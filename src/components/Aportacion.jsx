import { useEffect, useState } from "react";
import { roundNumber } from "../lib";

import InputDinero from "./InputDinero";
import Saldo from "./Saldo";

import styles from "./Aportacion.module.css";
import iconoPersona from "../images/icono-persona.png";


function Aportacion({aPagar, textoNombre}) {

    let [cantidadAportada, setCantidadAportada] = useState(0);
    let [valorSaldo, setValorSaldo] = useState(0);

    useEffect (
            ()=>{
                if (isNaN(cantidadAportada) === true) {
                    setCantidadAportada(0);
                } else {
                setValorSaldo(roundNumber((cantidadAportada - aPagar),2));
                }
            },
            [cantidadAportada, aPagar]
            )


    return (
        <div className={
                [
                    styles.entradaPersona,
                    valorSaldo === 0 ? styles.bordeAzul : "",
                    valorSaldo < 0 ? styles.bordeRojo : "",
                    valorSaldo > 0 ? styles.bordeVerde : "",
                ].join(" ")
            }
        >
            <img src={iconoPersona} alt="icono.png" />
            <input className={styles.nombre} type="text" placeholder={textoNombre}></input>
            <InputDinero className={styles.pago} cantidad={cantidadAportada} setCantidad={setCantidadAportada} texto="Pago €"/>
            <Saldo saldo={valorSaldo}/>
        </div>
    );

};

export default Aportacion;