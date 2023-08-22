import React from "react";
import { useLocation } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
    //Se guarda en esta vatiable la direccion digitada por el usuario
   let direccion = useLocation();
   return(
        <div className="error-div-container">
            {/* <h2>Fehler 404!</h2> */}
            {/* Se muestra la direccion digitada por el usuario por medio de 'direccion.pathname' */}
            {/* <p>Seite <code>{direccion.pathname}</code> nicht gefunden</p> */}
           <div className="alert alert-danger" role="alert">
               <h4 className="alert-heading">FEHLER 404!</h4>
               <p>Seite <code>{direccion.pathname}</code> nicht gefunden</p>
               <hr />
               <p className="mb-0">Wir konnten die von Ihnen gesuchte Website nicht finden :(</p>
           </div>
        </div>
        
   );
}