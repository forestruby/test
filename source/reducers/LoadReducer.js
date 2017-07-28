import {LOAD_NUMBER} from '../actions/types';

const INITIAL="";
export default (state  = INITIAL, action) =>{
    switch (action.type){
        case LOAD_NUMBER:
            return action.text;
        default: 
            return state;
    }
};