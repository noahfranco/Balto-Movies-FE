import './App.css';
import React, {useState} from "react"
import {Route, Switch,} from "react-router-dom"
import MoveList from "./components/MoveList"
import NavBar from "./components/NavBar"
import AddNewMovie from "./components/AddNewMovie"

// using context to allow us to pass state up and down the DOM tree
import MoveListContext from "./context/MoveListContext"
import AddNewMovieContext from "./context/AddNewMovieContext"


const App = () => {
  // HTTP .get() state
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

// HTTP .post() state
const [addNewMovie, setAddNewMovie] = useState({
  release_year: "",
  title: "",
  origin: "",
  director: "",
  cast: "",
  genre: "",
  wiki_page: "",
  plot: ""
})


  return (
    <div className="App">
      <NavBar />
      <h4> Welcome to Balto Movie Application </h4>
      <Switch> 
        <MoveListContext.Provider value={{moveList, setMoveList}}>
        <Route exact path="/" component={MoveList} />
        </MoveListContext.Provider>
      </Switch>

      <Switch>
        <AddNewMovieContext.Provider value={{addNewMovie, setAddNewMovie}}>
          <Route exact path="/newmovie" component={AddNewMovie} />
        </AddNewMovieContext.Provider> 
      </Switch>
    </div>
  );
}

export default App;
