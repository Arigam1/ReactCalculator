import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cashReducer } from './cashReducer';
import { customersReducer } from './customersReducer';
import thunk from "redux-thunk";

let reducers = combineReducers({
    cash: cashReducer,
    customers: customersReducer,
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

window.store = store;



export default store;