import React, {useContext, useState} from "react"
import axios from "axios"
// context to allow us to pass up and down the DOM tree
import AddNewMovieContext from "../context/AddNewMovieContext"

const AddNewMovie = (props) => {
    const {addNewMovie, setAddNewMovie} = useContext(AddNewMovieContext)

    console.log("props in AddNewMovie: ", addNewMovie)

    
    // localhost endpoint: http://localhost:4000/api/movies/post
    // production endpoint: https://tranquil-meadow-07587.herokuapp.com/api/movies/post
    const submitHandler = (event) => {
        event.preventDefault()
        axios
        .post("https://tranquil-meadow-07587.herokuapp.com/api/movies/post", addNewMovie)
        .then((res) => {
            console.log("hit me")
            console.log({res})
            setAddNewMovie(res.data)
            props.history.push("/")
        }) .catch((error) => {
           console.log({error}) 
        }, [])
    }

    const changeHandler = (event) => {
        setAddNewMovie({
            ...addNewMovie,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
        <h4> Post a Movie </h4> 
         {/* Add Form */}
         <form onSubmit={submitHandler}>
            <div>
                <input 
                    type="text"
                    name={"release_year"}
                    value={props.release_year}
                    onChange={changeHandler}
                    placeholder="Relase Year"
                />
                <input 
                    type="text"
                    name={"title"}
                    value={props.title}
                    onChange={changeHandler}
                    placeholder="Title"
                />
                <input 
                    type="text"
                    name={"origin"}
                    value={props.origin}
                    onChange={changeHandler}
                    placeholder="Origin"
                />
                <input 
                    type="text"
                    name={"director"}
                    value={props.director}
                    onChange={changeHandler}
                    placeholder="Director"
                />
                 <input 
                    type="text"
                    name={"cast"}
                    value={props.cast}
                    onChange={changeHandler}
                    placeholder="Cast"
                /> 
                 <input 
                    type="text"
                    name={"genre"}
                    value={props.genre}
                    onChange={changeHandler}
                    placeholder="Genre"
                />  
                 <input 
                    type="text"
                    name={"wiki_page"}
                    value={props.wiki_page}
                    onChange={changeHandler}
                    placeholder="Wiki Page"
                /> 
                <input 
                    type="text"
                    name={"plot"}
                    value={props.plot}
                    onChange={changeHandler}
                    placeholder="Plot"
                />         
            </div> 
            <button onClick={submitHandler}> Submit </button>
         </form>
        </>
    )
}

export default AddNewMovie