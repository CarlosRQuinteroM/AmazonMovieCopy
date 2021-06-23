import {combineReducers} from 'redux';
import credentials from './credential-reducer';


const rootReducer = combineReducers({
    credentials,

});

export default rootReducer;