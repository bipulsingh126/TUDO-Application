import { createStore } from'redux';
import todoReducer from './Reducers.js';


const store = createStore(todoReducer);

export default store;