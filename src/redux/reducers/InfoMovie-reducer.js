import {ADD_MOVIE, DELETE_MOVIE} from '../type';

const initialState = {
    movie : {},
};

const movieReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_MOVIE :
            return action.payload;

         case DELETE_MOVIE :
             return initialState;

        default : 
            return state
    }
}

export default  movieReducer;