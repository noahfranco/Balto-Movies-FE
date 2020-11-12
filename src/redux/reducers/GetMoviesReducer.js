import {
    FETCHMOVIE,
    SUCCESSMOVIE,
    FAILDMOVIE
} from "../actions/GetMoviesActions"

const initialState = {
    isFetching: false, 
    movies: [],
    error: ""
}

const getMoviesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHMOVIE:
            return {
                ...state,
                isFetching: true
            }
        case SUCCESSMOVIE:
            return {
                ...state,
                isFetching: false,
                movies: action.payload
            }
        case FAILDMOVIE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default getMoviesReducer