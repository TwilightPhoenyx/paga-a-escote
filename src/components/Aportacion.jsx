import { useEffect, useState } from "react";

import InputDinero from "./InputDinero"
import { roundNumber } from "../lib";

import Saldo from "./Saldo";
import styles from "./Aportacion.module.css";
import iconoPersona from "../images/icono-persona.png";


function Aportacion({aPagar}) {

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
        <div className={styles.entradaPersona}>
            <img src={iconoPersona} alt="icono.png" />
            <input className={styles.nombre} type="text" placeholder="Nombre"></input>
            <InputDinero cantidad={cantidadAportada} setCantidad={setCantidadAportada} texto="Pago €"/>
            <Saldo saldo={valorSaldo}/>
        </div>
    );

};

export default Aportacion;