import { dogReducer ,statusReducer} from "./reducers"
import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk";

const reducers = combineReducers({
    dogReducer: dogReducer,
    statusReducer: statusReducer
})

export const store = createStore(reducers,applyMiddleware(thunk));