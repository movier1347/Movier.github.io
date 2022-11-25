import React, { useState, useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ToWatchPage from "./components/ToWatchPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Error from "./components/Error";
import { nanoid } from "nanoid";
import MoviePage from "./components/MoviePage";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [toWatch, setToWatch] = useState([]);


  function addTask(name, moviePoster) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false, moviePoster };
    let newArrTask = [];
    for(let i = 0; i < tasks.length; i++){
      newArrTask.push(tasks[i]);
    }
    newArrTask.push(newTask);
    //passes the new task to setTask using a split function appending it to the end of the task list
    setTasks(newArrTask);
  }

  /*let myTimer = setInterval(printTaks, 3000);

  function printTaks(){
    for(let i = 0; i < tasks.length; i++){
      console.log(tasks);
    }
  }*/
  //tasks on parent so that we can add a movie from 
  //const [tasks, setTasks] = useState([]);
  //*******  RETURN STARTS HERE  **********
  return (
    <>
    
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <ToWatchPage tasks={tasks} setTasks={setTasks} addTask={addTask}/>
        </Route>
        <Route path="/movie">
          <MoviePage tasks={tasks} setTasks={setTasks} addTask={addTask}/>
        </Route>

        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
