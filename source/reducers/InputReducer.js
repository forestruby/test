import {INPUT_NUMBER} from '../actions/types';
const INITIAL="";
export default (state  = INITIAL, action) =>{
    switch (action.type){
        case INPUT_NUMBER:
            return action.InputNumber;
        default: 
            return state;
    }
};