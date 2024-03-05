import React from "react";

export function useLocalStorage(itemName, initialValue){
  
    const [items,setItem]=React.useState(initialValue);
    const [loading,setLoading]=React.useState(true);
    const [error,setError]=React.useState(false);
    const [sincronizedItem,setSincronizedItem]=React.useState(true)
    
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
            setSincronizedItem(true)
          } 
          catch(error){
            setLoading(false);
            setError(true);
          }
        },3000);
}, [sincronizedItem]);
    
    const saveItem=(newArrayItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newArrayItem))
      setItem(newArrayItem)
    }

    const sincronized=()=>{
      setLoading(true)
      setSincronizedItem(false)
    }
    return {
      items,
      saveItem,
      loading,
      error,
      sincronized
    }
    
  };
 