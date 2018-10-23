import {
    ADD_TODO,
    DELETE_TODO,
    CANCEL_TODO,
    SELECT_TODO,
    SET_TODO
} from "../actions/actionTypes";

const initialState = {
    todo: {
        todo: "",
        location: {},
        image: null
    },
    todos: [],
    selectedTodo: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            console.log(state);
            return {
                ...state,
                todo: {
                    ...state.todo,
                    todo: action.val
                }
            };
        case ADD_TODO:
            const val = action.todo.trim();
            const id = parseInt(Math.random() * 10000)
                .toString()
                .trim();
            if (val !== "") {
                return {
                    ...state,
                    todo: "",
                    todos: [
                        ...state.todos,
                        {
                            data: val,
                            location: action.location,
                            image: action.image,
                            id: id
                        }
                    ]
                };
            }
        case DELETE_TODO:
            const allTodos = [...state.todos];
            return {
                ...state,
                todos: allTodos.filter(
                    todo => todo.id !== state.selectedTodo.id
                ),
                selectedTodo: null
            };
        case SELECT_TODO:
            const todo = [...state.todos].filter(
                todo => todo.id === action.todoId
            )[0];
            return {
                ...state,
                selectedTodo: todo
            };
        case CANCEL_TODO:
            return {
                ...state,
                selectedTodo: null
            };
        default:
            return state;
    }
};

export default todoReducer;
