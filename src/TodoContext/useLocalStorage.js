import React from "react";

export function useLocalStorage(itemName, initialValue){
  
    const [items,setItem]=React.useState(initialValue);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);
    
      React.useEffect(()=>{
        setTimeout(()=>{
          try{   
            const localStorageItem=localStorage.getItem(itemName);
            
            let parsedItems;
            
            if(!localStorageItem){
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItems=initialValue;
            } else{
              parsedItems=JSON.parse(localStorageItem);
              setItem(parsedItems)
            }
            setLoading(false);
          } catch(error){
            setLoading(false);
            setError(true);
          }
        },3000);
}, []);
    
    const saveItem=(newArrayItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newArrayItem))
      setItem(newArrayItem)
    }

    // console.log(items)
    
    return {
      items,
      saveItem,
      loading,
      error}
    
  };
 
  //  error,
  //   loading,
  //   completedTodos,
  //   totalTodos,
  //   searchValue,
  //   searchedTodos,
  //   setSearchValue,
  //   completeTodo,
  //   deleteTodo,

    // localStorage.removeItem(`Todos-v.1`)

// const defaultTodos=[
//   {text:`cortar Cebolla`, completed:false},
//   {text:`completar el curso`, completed:false},
//   {text:`cortar ajo`, completed:false},
//   {text:`LALAL`, completed:false},
//   {text:`cortar`, completed:false}
// ]

// localStorage.setItem(`Todos-V.1`,JSON.stringify(defaultTodos))