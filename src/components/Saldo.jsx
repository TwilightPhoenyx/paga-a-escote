import { useState } from "react";
import { useEffect } from "react";
import SmileHappy from "../images/SmileHappy.png"
import SmileNerveus from "../images/SmileNerveus.png"
import SmileWorry from "../images/SmileWorry.png"

import styles from "./Saldo.module.css"

function Saldo ({saldo}) {

    let [imagen, setImagen] = useState();

   useEffect(() => {

   if (saldo === 0) {setImagen(SmileHappy)} // El smile ha pagado
   else if (saldo > 0) {setImagen(SmileNerveus)}  // El smile recibe el pago
   else {setImagen(SmileWorry)}  // El smile tiene que pagar

   

   

   },
   [saldo]
   )
   
   return(
        <div className={styles.saldo}>
            <p> {saldo.toFixed(2)} </p>
            <img src={imagen}/>
        </div>
    );
    
};

export default Saldo;