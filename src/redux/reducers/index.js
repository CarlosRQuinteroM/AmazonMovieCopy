import {combineReducers} from 'redux';
import credentials from './credential-reducer';
import movies from './InfoMovie-reducer'
import ordersRent from './Rent-reducer';


const rootReducer = combineReducers({
    credentials,
    movies,
    ordersRent,

});

export default rootReducer;