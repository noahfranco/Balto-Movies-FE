import React, {useEffect, useContext} from "react"
import axios from "axios"
import MoveCard from "./MoveCard"
// context to allow us to pass up and down the DOM tree
import MoveListContext from "../context/MoveListContext"

const MoveList = () => {
    const {moveList, setMoveList} = useContext(MoveListContext)

    useEffect(() => {
        axios
        .get("http://localhost:4000/api/movies/get")
        .then((res) => {
            // console.log({res})
            setMoveList(res.data)
        }) .catch((error) => {
           console.log({error}) 
        }, [])
    }, [])

    return (
        <>
        <h3> View now </h3>
         {/* mapp through satae */}
         {moveList.map((event) => (
             <MoveCard release_year={event.release_year} title={event.title} origin={event.origin} director={event.director} cast={event.cast} genre={event.genre} wiki_page={event.wiki_page} plot={event.plot} />
         ))}
        </>
    )
}

export default MoveList
