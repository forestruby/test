import { LOAD_DATA,INPUT_NUMBER,LOAD_NUMBER } from './types.js';
import React, {PropTypes} from 'react';

// import todoList from '../reducers/todolist.json';
import {InputNumber} from '../components/TodoList'; 
const propTypes = {
    InputNumber : PropTypes.string
}
export const inputNumber = (InputNumber) =>({
    type: INPUT_NUMBER,
    InputNumber
})
inputNumber.propTypes = propTypes;
export const loadNumber = ()=> {
    return(dispatch) => {
        dispatch({
            type: LOAD_NUMBER,
            text: InputNumber
        })
    }
}
// export const loadData = () => {
//     return (dispatch) => {
//         fetch('http://192.168.1.106:8082/test/find.php')
//             .then(response => response.json())
//             .then(responseJson => {
               
//                 dispatch({
//                     type: LOAD_DATA,
//                     payload: responseJson.data || responseJson
//                 });
//             }).catch(error => {
//                 console.log('error');
//             });
//     };


// };