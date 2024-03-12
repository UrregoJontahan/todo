import React from 'react';
import { useTodos } from './useTodos';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreatetodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EMptyTodos } from '../EMptyTodos';
import { Modal } from '../Modal';
import {TodoForm} from "../TodoForm"
import { TodoHeader } from "../TodoHeader";
import {TodoCounter} from "../TodoCounter"
import {TodoSearch} from "../TodoSearch"
import { ChangeAlertWithStorageListener } from '../changeAlert';

function App() {
  const {
    error,
    loading,                 
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizedTodos
  }= useTodos(); 

  return (
    <React.Fragment> 
      <TodoHeader >
        <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
        />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        onError={()=><TodosError/>}
        onLoading={()=><TodosLoading/>}
        onEmptyTodos={()=><EMptyTodos/>}
        render={todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=>completeTodo(todo.text)}
            onDelete={()=>deleteTodo(todo.text)}
          />
          )}
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      {!!openModal && (
        <Modal>
          <TodoForm
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
      </Modal>
      )}

        <ChangeAlertWithStorageListener 
          sincronized={sincronizedTodos}
        />

     </React.Fragment>
  );
}
export default App;
 