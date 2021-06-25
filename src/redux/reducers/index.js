import {combineReducers} from 'redux';
import credentials from './credential-reducer';
import movies from './InfoMovie-reducer'


const rootReducer = combineReducers({
    credentials,
    movies,

});

export default rootReducer;