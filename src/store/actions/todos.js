import {
    ADD_TODO,
    DELETE_TODO,
    CANCEL_TODO,
    SELECT_TODO,
    SET_TODO
} from "./actionTypes";

export const setTodo = val => {
    return {
        type: SET_TODO,
        val: val
    };
};

export const addTodo = (todo, location, image) => {
    return {
        type: ADD_TODO,
        todo,
        location,
        image
    };
};

export const deleteTodo = () => {
    return {
        type: DELETE_TODO
    };
};

export const selectTodo = id => {
    return {
        type: SELECT_TODO,
        todoId: id
    };
};

export const cancelTodo = () => {
    return {
        type: CANCEL_TODO
    };
};
