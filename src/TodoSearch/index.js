import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";


function TodoSearch(){
    const {
        searchValue,
        setSearchValue,
      }=React.useContext(TodoContext)

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