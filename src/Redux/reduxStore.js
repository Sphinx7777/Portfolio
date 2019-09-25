import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import todoReducer from "./todoReducer";
import { reducer as formReducer } from 'redux-form';
import { save} from 'redux-localstorage-simple'



let reducers = combineReducers({
	toDo: todoReducer,
	form: formReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
const store = createStore(reducers,compose(
	composeEnhancers(
		applyMiddleware(thunkMiddleware,save({namespace:'Tasks-list'}))
	)));

export default store