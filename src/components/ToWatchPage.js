import React, { useState, useRef, useEffect } from "react";

import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import DarkMode from "./DarkMode";
import { nanoid } from "nanoid";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

//defines the filter buttons
const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);



/* **** FUNCTION COMPONENT ToWatchPage STARTS HERE **** */
function ToWatchPage(props) {

  //const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [isDarkMode, setDarkMode] = useState(false);
  const [counter, setCounter] = useState(0);
  const [len, setLen] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    //setLen(headingText);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  /*useEffect(() => {
    const data = localStorage.getItem("listOfTasks");
    if (data) {
      props.setTasks(JSON.parse(data));
    }
  }, []);*/

  useEffect(() => {
    const darkModePersist = localStorage.getItem("darkMode");
    if (darkModePersist) {
      setDarkMode(JSON.parse(darkModePersist));
    }
  }, []);

  /*useEffect(() => {
    localStorage.setItem("listOfTasks", JSON.stringify(props.tasks));
  }, [props.tasks]);*/

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // take a name from handleSubmit function (Form.js: line 11) to setTask
  //create a newTask with id, name, and completed inputs

  function clearAll() {
    localStorage.clear();
    return props.setTasks([]);
  }



  function toggleTaskCompleted(id) {
    const updatedTasks = props.tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    props.setTasks(updatedTasks);
  }

  // deleteTask takes in the task's id and uses the filter function to map through the tasks
  // and saves all the tasks that are not the id into remainingTasks and passes them to setTasks (ToWatchPage.js line 25)
  function deleteTask(id) {
    const remainingTasks = props.tasks.filter((task) => id !== task.id);
    props.setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    //map throught the tasks
    const editedTaskList = props.tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //append the newName to the task list
        return { ...task, name: newName };
      }
      return task;
    });
    //call the setTask function and pass in the editedTaskList
    props.setTasks(editedTaskList);
  }

  const taskList = props.tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      poster={task.moviePoster}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));



  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? "movies" : "movies";
  const headingText = `${taskList.length} ${tasksNoun} to watch`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(props.tasks.length);

  useEffect(() => {
    if (props.tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [props.tasks.length, prevTaskLength]);

  //*******  RETURN STARTS HERE  **********
  return (
    <div
      className={
        isDarkMode ? "todoapp scott-dark stack-large" : "todoapp stack-large"
      }
    >
      <h1 className="movies-to" >Movies To Watch</h1>
      <DarkMode
        isDarkMode={isDarkMode}
        setDarkMode={setDarkMode}
        className="mode-btn"
      />
      
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
        taskList
        }
      </ul>
      <button className="clearAllBtn" onClick={clearAll}>
        Clear All Movies
      </button>
    </div>
  );
}

export default ToWatchPage;
