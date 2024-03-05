import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){

    const {
        items:todos,
        saveItem:saveTodos,
        sincronized:sincronizedTodos,
        loading,
        error,
        }=useLocalStorage(`Todos-V.1`, []);
    
      const [searchValue,setSearchValue]=React.useState(``);

      const [openModal,setOpenModal]=React.useState(false);
    
      const completedTodos= todos.filter(todo=>todo.completed).length;
      const totalTodos=todos.length;
      
      
      const searchedTodos = todos.filter(
        todo=>{
          const todoText=todo.text.toLowerCase();
          const textTodo=searchValue.toLowerCase()
          
          return todoText.includes(textTodo)
        }
        ); 
        
        const addTodo=(text)=>{
          const newTodos=[...todos];
          newTodos.push({
            text,
            completed:false,
          })
          saveTodos(newTodos)
        }
    
        const completeTodo=(text)=>{
          const newTodos=[...todos];
          const todoIndex= newTodos.findIndex(
            (todo)=>todo.text===text
            )
            newTodos[todoIndex].completed=true
        saveTodos(newTodos)
      }
    
      const deleteTodo=(text)=>{
        const newTodos=[...todos];
        const todoIndex= newTodos.findIndex(
          (todo)=>todo.text===text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }

    return{
            error,
            loading,
            completedTodos,
            totalTodos,
            searchValue,
            searchedTodos,
            setSearchValue,
            completeTodo,
            deleteTodo,
            setOpenModal,
            openModal,
            addTodo,
            sincronizedTodos
        }
}

export { useTodos }