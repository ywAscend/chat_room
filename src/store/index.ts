import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import socketReducer from "./reducers";
const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const rootReducer = combineReducers({
    socketReducer
})

const store = createStore(rootReducer,composeEnhancer(applyMiddleware()))

export default store
