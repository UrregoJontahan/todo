import "./CreateTodoButton.css"
import React from "react"

function CreateTodoButton({setOpenModal}){
  return (
    <button className="CreateTodoButtton"
      onClick={
        ()=>{
            setOpenModal(state=>!state)
        }
      }
    >
        +
      </button>
    )
  }
      
  
  
  
export {CreateTodoButton}