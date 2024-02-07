import React from "react";
import "./TodoSearch.css";

function TodoSearch({searchValue,setSearchValue,loading}){

    return (
        <input placeholder="Buscar..." id="search"
            value={searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value)
            }}
            
        ></input>
        )
    }
    
export {TodoSearch}