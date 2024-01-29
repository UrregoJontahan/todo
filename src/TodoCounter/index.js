import React from "react";
import "./TodoCounter.css"
import { TodoContext } from "../TodoContext";

function TodoCounter(){
  const {
    completedTodos,
    totalTodos,
  }=React.useContext(TodoContext)

  if(!totalTodos) return <h1>No se ha Agregado ningún TODO</h1>
  
  if(totalTodos===completedTodos) return (   
    <h1>
     🥳 Has completado todos tus TODOS Felicitaciones!!!🥳
    </h1>
    ) 

    return (   
    <h1>
      Has completado<span className="span1">{ completedTodos }</span> de <span className="span2">{ totalTodos }</span> TODOS
    </h1>
    )
  }
  export {TodoCounter};


