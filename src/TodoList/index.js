import React from "react"
import "./TodoList.css"


function TodoList(props){
    const renderFunction=props.children || props.render;
    return (
        <section className="TodoLIst-Container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos() }

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunction)}

        </section>
    )
}

export {TodoList}
