import React, {useEffect, useContext, useState} from "react"
import axios from "axios"
import MovieCard from "./MovieCard"
// context to allow us to pass up and down the DOM tree
import MoveListContext from "../context/MovieListContext"

const MoveList = () => {
    const [searchBar, setSearchBar] = useState("")
    const {moveList, setMoveList} = useContext(MoveListContext)


    // localhost endpoint: http://localhost:4000/api/movies/get
    // production endpoint: https://tranquil-meadow-07587.herokuapp.com/
    useEffect(() => {
        axios
        .get("https://tranquil-meadow-07587.herokuapp.com/api/movies/get")
        .then((res) => {
            setMoveList(res.data)
        }) .catch((error) => {
           console.log({error}) 
        }, [])
    }, [])

    const handleSearch = (event) => {
        setSearchBar(event.target.value)
    }

    const filterSearch = moveList.filter((movies) =>
    movies.title.toLowerCase().includes(searchBar.toLowerCase())
)

    return (
        <>
        <div>
        <form>
                <input 
                    type="text"
                    placeholder="Search Movie Titles"
                    value={searchBar}
                    onChange={handleSearch}
                />    
            </form> 
        </div>
            {filterSearch.map((movie) => {
                return (
                    <MovieCard release_year={movie.release_year} title={movie.title} origin={movie.origin} director={movie.director} cast={movie.cast} genre={movie.genre} wiki_page={movie.wiki_page} plot={movie.plot} />
                )
            })}
        </>
    )
}

export default MoveList
