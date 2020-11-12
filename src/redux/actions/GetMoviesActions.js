import axios from "axios"
const FETCHMOVIE = "FETCHMOVIE"
const SUCCESSMOVIE = "SUCCESSMOVIE"
const FAILDMOVIE = " FAILDMOVIE"

export const getMoviesActions = () => dispatch => {
    dispatch({type:FETCHMOVIE})
    axios.get("http://localhost:4000/api/movies/get)").then((res) => {
        dispatch({type:SUCCESSMOVIE, payload: res.data})
    }) .catch((error) => {
       dispatch({type:FAILDMOVIE, error: error}) 
    })
}