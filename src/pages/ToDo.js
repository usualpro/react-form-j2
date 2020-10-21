import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ToDo = () => {
  const [todoList, updateToDoList] = useState([]);
  const [currentTodoDescription, updateCurrentTodoDescription] = useState("");
  const addTodo = () => {
    const tabCopy = [...todoList];
    const newToDo = {
      created: Date.now(),
      done: false,
      desc: currentTodoDescription,
    };
    tabCopy.push(newToDo);
    updateToDoList(tabCopy);
  };
  const onTextInputChange = (element) => {
    updateCurrentTodoDescription(element.target.value);
  };
  const onToDoChange = (domElement, toDo) => {
    const indexOfTodo = todoList.indexOf(toDo);
    const tabCopy = [...todoList];
    tabCopy[indexOfTodo].done = domElement.target.checked;
    updateToDoList(tabCopy);
  };
  return (
    <div className="container">
      <input
        onChange={onTextInputChange}
        placeholder={"indiquez la description de votre tâche"}
        type="text"
      />
      <br />
      <p>{JSON.stringify(todoList)}</p>
      <ul className="list-group">
        {todoList.map((todo, index) => (
          <li key={index} className="list-group-item">
            <input
              onChange={(element) => onToDoChange(element, todo)}
              className="form-check-input mr-1"
              type="checkbox"
              value={todo.done}
            />
            {todo.desc}
          </li>
        ))}
      </ul>
      <button onClick={addTodo}>Ajout d'une tache</button>
      <br />
      <Link className="btn btn-primary" to="/">
        Retour vers la home
      </Link>
    </div>
  );
};
