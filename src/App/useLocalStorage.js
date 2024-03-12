import React, { useReducer } from "react";

export function useLocalStorage(itemName, initialValue){
  
  const initialState = ({ initialValue }) =>({
    items: initialValue,
    loading: true,
    error: false,
    sincronizedItem: true,
  })
  
  const actionType = ({
    error: "ERROR",
    success:"SUCCESS",
    save:"SAVE",
    sincronize:"SINCRONIZE"
  })
  
  const onError = (error) => dispatch({ type: actionType.error , payload: error })
  const onSucess = (item) => dispatch({ type:actionType.success ,payload:item })
  const onSave = (item) => dispatch({ type:actionType.save ,payload:item })
  const onSincronize = () => dispatch({ type:actionType.sincronize })
  
  const reducerOBject = (state , payload) =>({
    [actionType.error]:{
      ...state,
      error: true
    },
    [actionType.success]:{
      ...state,
      error: false,
      loading:false,
      sincronizedItem: true,
      items: payload,
    },
    [actionType.sincronize]:{
      ...state,
      loading:true,
      sincronizedItem: false,
    },
    [actionType.save]:{
      ...state,
      items:payload,
    },
  })
  
  const reducer = (state , action ) =>{
    return reducerOBject(state , action.payload)[action.type] || state;
  }

  const [state, dispatch] = useReducer( reducer, initialState({ initialValue }) )
  
  const{
    items,
    loading,
    error,
    sincronizedItem,
  } = state;
  
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
            }
            onSucess(parsedItems)
          } 
          catch(error){
            onError(error)
          }
        },3000);
}, [sincronizedItem]);
    
    const saveItem=(newArrayItem)=>{
      localStorage.setItem(itemName,JSON.stringify(newArrayItem))
      onSave(newArrayItem)
    }

    const sincronized=()=>{
      onSincronize()
    }
    return {
      items,
      saveItem,
      loading,
      error,
      sincronized
    }
    
  };
 