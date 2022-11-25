import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  function handleChange(e) {
    //any changes in the text feild sets the input of setName
    setName(e.target.value);
  }

  function handleSubmit(e) {
    //prevent the browser from refreshing and trying to submit to the server
    e.preventDefault();
    if (name !== "") {
      //passes the text field input to the addTask function in ToWatchPage.js (line 29)
      props.addTask(name);
      //resets the text field to empty
      setName("");
    }
  }
  return (
    //when form is submitted the handleSubmit function (Forms.js: line 11)
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Add a movie to watch later...
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        // value is set to name
        value={name}
        //when the textfield changes, the handleChange function is fired (Form.js line: )
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add a Movie
      </button>
    </form>
  );
}

export default Form;
