import React from "react";
import "./TodoCounter.css"

function TodoCounter({completedTodos,totalTodos,loading}){

  if(!totalTodos) return <h1>No se ha Agregado ningún TODO</h1>
  
  if(totalTodos===completedTodos) return (    
    <h1>
     🥳 Has completado todos tus TODOS Felicitaciones!!!🥳
    </h1>
    ) 

    return (   
    <h1 className={`${!!loading && "--loading"}`}>
      Has completado 
      <span className="span1"> 
        {completedTodos }
      </span> de 
      <span className="span2">
          { totalTodos }
      </span> TODOS
    </h1>
    )
  }
  export {TodoCounter};


