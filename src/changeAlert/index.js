import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./changeAlert.css"

function ChangeAlert({ show,toggleShow }){
    if(show){
        return (
            <div className="Countainer-father">
                <div className="container-button-reloadTodos">
                    <p className="text-Modal">
                        Parece que hiciste cambios en
                        otra ventana, recarga para ver los cambios
                    </p>
                    <button 
                        className="button-reload"
                        onClick={()=>toggleShow(false)}
                    >Recargar</button>
                </div>   
            </div>
        )
    }
    else{

        return null
    }

     
}

const ChangeAlertWithStorageListener=withStorageListener(ChangeAlert)

export {ChangeAlertWithStorageListener}
