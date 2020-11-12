import './App.css';
import React, {useState} from "react"
import {Route, Switch} from "react-router-dom"
import MoveList from "./components/MoveList"
// context to allow us to pass up and down the DOM tree
import MoveListContext from "./context/MoveListContext"
import NavBar from "./components/NavBar"

const App = () => {
  const [moveList, setMoveList] = useState([{
    release_year: "",
    title: "",
    origin: "",
    director: "",
    cast: "",
    genre: "",
    wiki_page: "",
    plot: ""
}])


  return (
    <div className="App">
      <NavBar />
      <h4> Welcome to Balto Movie Application </h4>
      <Switch> 
        <MoveListContext.Provider value={{moveList, setMoveList}}>
        <Route exact path="/" component={MoveList} />
        </MoveListContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
