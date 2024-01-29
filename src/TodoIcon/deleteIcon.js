import { TodoIcon } from "./index";
import React from "react";

function DeleteIcon({onDelete}){
    return (
    <TodoIcon
        type="delete"
        color="grey"
        onClick={onDelete}
    />
)
}

export {DeleteIcon}