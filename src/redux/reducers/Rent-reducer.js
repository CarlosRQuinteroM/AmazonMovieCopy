import {ADD_RENT, CLEAR_RENT} from '../type';

const initialState = {
    ordersMovie: []
};

const orderRentReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_RENT :
            return action.payload;

            
            case CLEAR_RENT:
                return initialState;
            
        
        
        default : 
            return state
    }
}

export default orderRentReducer;