import {
    ADD_TODO,
    DELETE_TODO,
    CANCEL_TODO,
    SELECT_TODO,
    SET_TODO,
    GET_TODO
} from "./actionTypes";

export const addTodo = (todo, location, image) => {
    return dispatch => {
        fetch(
            "https://us-central1-todolist-746df.cloudfunctions.net/storeImage",
            {
                method: "POST",
                body: JSON.stringify({
                    image: image.base64
                })
            }
        )
            .then(res => res.json())
            .then(parsedRes => {
                const url = parsedRes.imageUrl;
                const val = todo.trim();
                return fetch(
                    "https://todolist-746df.firebaseio.com/todos.json",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            data: val,
                            location: location,
                            image: {
                                uri: url
                            }
                        })
                    }
                )
                    .then(res => res.json())
                    .then(parsedRes => {
                        console.log(parsedRes);
                    })
                    .catch(err => {
                        alert("error occurred!");
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
                alert("Error");
            });
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

export const getTodo = () => {
    return dispatch => {
        fetch("https://todolist-746df.firebaseio.com/todos.json", {
            method: "GET"
        })
            .then(res => res.json())
            .then(parsedRes => {
                console.log(parsedRes);
                const todoList = [];
                for (let key in parsedRes) {
                    todoList.push({
                        ...parsedRes[key],
                        id: key
                    });
                }
                //console.log("[TodoList]", todoList);
                dispatch(setTodo(todoList));
            })
            .catch(err => {
                alert("Error occurred!");
                console.log(err);
            });
    };
};

export const setTodo = todoList => {
    return {
        type: SET_TODO,
        todoList: todoList
    };
};
