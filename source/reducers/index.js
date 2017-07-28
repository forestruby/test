import {combineReducers} from 'redux';
import TodoListReducer from './TodoListReducer';
import InputReducer from './TodoListReducer';
import LoadReducer from './TodoListReducer';
export default combineReducers({
    TodoListReducer,InputReducer,LoadReducer
});