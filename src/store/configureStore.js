import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import todoReducer from "./reducers/todos";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

const rootReducer = combineReducers({
    TodoApp: todoReducer
});

let composeEnhancer = compose;
if (__DEV__) {
    composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(thunk, logger))
    );
};

export default configureStore;
