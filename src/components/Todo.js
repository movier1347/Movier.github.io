import React, { useEffect, useRef, useState } from "react";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}



/*  **** START OF THE Todo FUNCTIONAL COMPONENT **** */
function Todo(props) {
  //the editing useState hook is set to false meaning edit mode is off by default
  const [isEditing, setEditing] = useState(false);

  //this useState hook sets the edit mode default to "" and takes has a current value of newName with a future value of setNewName
  const [newName, setNewName] = useState("");

  //set the defalut state to false, the isImortantClicked is a variable, and setIsImortantClicked is a function to change the boolean value in (line
  const [isImortantClicked, setIsImortantClicked] = useState(false);

  const wasEditing = usePrevious(isEditing);
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  //any changes in the editting text feild sets the input of setName
  function handleChange(e) {
    setNewName(e.target.value);
  }

  // handleSubmit is called when the Save button is clicked in editing template
  function handleSubmit(e) {
    //prevent the browser from refreshing and trying to submit to the server
    e.preventDefault();
    //if not input "" was types to the edit text field the newName will not be passed to editTask
    if (newName !== "") {
      //passes the edit text field input newName to the editTask function in Home.js (line 55) along with the id
      props.editTask(props.id, newName);
      //resets the text field to empty
      setNewName("");
      //resets the text field to default task mode
      setEditing(false);
    }
  }


  // editingTemplate is the ToDo template when editing is true
  const editingTemplate = (
    //when "Save" btn is submitted the handleSubmit is fired
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label
          className="todo-label"
          //sets the label to the checkbox in edit mode
          htmlFor={props.id}
          // passses in the the old name that will be changed
        >
          New name for {props.name}
        </label>

        <input
          id={props.id}
          className="todo-text"
          type="text"
          value={newName}
          //when the edit textfield changes, the handleChange function is fired (Todo.js line:32)
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn todo-cancel"
          // when the edit cancel button is clicked the setEditting mode is turned off by passing false to setEditing
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );

  const styleImgSmallStack = {
    backgroundImage: `url(${props.poster}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "18%",
    
  }
  const styleImgSmallStackCom = {
    backgroundImage: `url(${props.poster}`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "18%",
    border: "2px solid rgb(138, 255, 134)"
    
  }
  // the default mode for viewing the Home
  const viewTemplate = (
    <div className="stack-small" style={ !props.completed?
      styleImgSmallStack:styleImgSmallStackCom
      }>
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          //default of completed task
          defaultChecked={props.completed}
          //changes completed by calling the toggleTaskCompleted and passing in the id to complete
          onChange={() => {
            props.toggleTaskCompleted(props.id)
            setIsImortantClicked(!isImortantClicked)
          }}
        />
        <label
          // the following code changes the checkbox to red if Important checkbox is clicked. The className is a JS function {}
          // code to change the className by using a terenary operator and isImportantClicked hook... if isImportantClicked is true set className to "todo-label important-red", else false set className to "todo-label"
          className={
            props.completed ? "todo-label important-red" : "todo-label"
          }
          htmlFor={props.id}
        >
          {props.name}</label>
      </div>
      <div className="btn-group1">
        <button
          type="button"
          className="btn btn__danger"
          //deletes the task by calling the deleteTask (Home.js line 50) by passing in the id
          onClick={() => props.deleteTask(props.id)}
        > 
          Delete<span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  //sets the focus for the elements
  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    }
    if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

export default Todo;
