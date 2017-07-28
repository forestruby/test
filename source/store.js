import {createStore, applyMiddleware,compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
const middleware = {thunkMiddleware};
const store = createStore(
    reducers,
    {},
    applyMiddleware(thunkMiddleware)
    
);
console.log("asd"+store.getState());
export default store;