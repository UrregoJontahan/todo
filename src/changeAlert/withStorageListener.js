import React from "react";

function withStorageListener(WrappedComponent){
    return function WrappedComponentStorageListener(props){
        const [storageChange, setStorageChange ]=React.useState(false)

        window.addEventListener("storage", (change)=>{
            if(change.key ===`Todos-V.1`){
                console.log(change, "hubo cambios" )
                setStorageChange(true)
            }
        })

        const toggleShow=()=>{
            setStorageChange(false)
            props.sincronized()
        }

        return <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}               
        />
    }
}

export {withStorageListener}