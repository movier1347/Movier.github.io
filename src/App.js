import React, { useState, useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ToWatchPage from "./components/ToWatchPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Error from "./components/Error";
import { nanoid } from "nanoid";
import jwt_decode from "jwt-decode";
import MoviePage from "./components/MoviePage";
import Review from "./components/Review";
import Navbar2 from "./components/NavBar2";

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [toWatch, setToWatch] = useState([]);
  const [user, setuser] = useState({});

  function handleCallBackResponse(response){
    //console.log("encoded jwt id toekn" + response.credential);
    let userObject = jwt_decode(response.credential);
    setuser(userObject);
    //console.log(userObject);
    document.getElementById("signInDiv").style.display = "none";
    document.getElementById("outButton").style.display = "flex";
    document.getElementById("outButton").style.visibility = "visible";
    document.getElementById("outButton").style.justifyContent = "right";
  }
  //global google
  useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
      client_id: "227959365284-n2oldup2n4a9sjscmnskfcmfir3bu151.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline",
        size: "large",
        text: "signin_with"
      }
      )
    }, [])
  
  
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
  
  function handleSignOut(event){
    setuser({});
    document.getElementById("signInDiv").style.display = "flex";
    document.getElementById("outButton").style.visibility = "hidden";
  }

  //tasks on parent so that we can add a movie from 
  //const [tasks, setTasks] = useState([]);
  //*******  RETURN STARTS HERE  **********
  return (
    <>
    

      <Navbar2 user={user} signOut={handleSignOut} />
      <Switch>
        <Route path="/" exact>
          <ToWatchPage tasks={tasks} setTasks={setTasks} addTask={addTask}/>
        </Route>
        <Route path="/movie">
          <MoviePage tasks={tasks} setTasks={setTasks} addTask={addTask}/>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/review/:movieId">
          <Review user={user}/>
        </Route>

        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
