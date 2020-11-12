import React from "react"

const MoveCard = (props) => {
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