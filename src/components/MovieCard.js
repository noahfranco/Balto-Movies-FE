import React from "react"
import axios from "axios"

const MoveCard = (props) => {
    // props is passing state from MovieList component 
   console.log("props from MoveCard: ", props) 

   return (
       <>
        <h1> {props.title} </h1>
       <div>
            <p> Release Year: {props.release_year} </p>
            <p> Origin: {props.origin} </p>
            <p> Director: {props.director} </p>
            <p> Cast: {props.cast} </p>
            <p> Genre: {props.genre} </p>
            <p> Wiki Page: {props.wiki_page} </p>
            <p> Plot: {props.plot} </p>
        </div>
       </>
   )
}

export default MoveCard;