import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataBase from '../data/db';

export const ToDo = () => {
  const [todoList, updateToDoList] = useState([]);
  const [currentTodoDescription, updateCurrentTodoDescription] = useState("");
  useEffect(() => {
    DataBase.todos.toArray().then(results => updateToDoList(results));
  }, []);
  const addTodo = () => {
    const tabCopy = [...todoList];
    const newToDo = {
      created: Date.now(),
      done: false,
      desc: currentTodoDescription,
    };
    tabCopy.push(newToDo);
    DataBase.todos.add(newToDo).then(() => updateToDoList(tabCopy));
  };
  const onTextInputChange = (element) => {
    updateCurrentTodoDescription(element.target.value);
  };

  const onToDoChange = (domElement, toDo) => {
    const indexOfTodo = todoList.indexOf(toDo);
    const tabCopy = [...todoList];
    tabCopy[indexOfTodo].done = domElement.target.checked;
    DataBase.todos.bulkPut(tabCopy).then(() => updateToDoList(tabCopy));
  };

  const todosFilteredArray = todoList.filter(todo => (todo.done === false));

  return (
    <div className="container">
      <input
        className="form-control"
        onChange={onTextInputChange}
        placeholder={"indiquez la description de votre tâche"}
        type="text"
      />

      <form className="mb-3">
        <ul className="list-group">
          {todosFilteredArray.map((todo, index) => (
            <li key={index} className="list-group-item">
              <div className="form-check">
                <label className="visually-hidden">
                  <input
                    onChange={(element) => onToDoChange(element, todo)}
                    className="form-check-input mr-1"
                    type="checkbox"
                    value={todo.done}
                  />
                  {todo.desc}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </form>

      <button
        disabled={currentTodoDescription.length == 0 ? true : false}
        onClick={addTodo}
      >
        Ajout d'une tache
      </button>
      <br />
      <Link className="btn btn-primary" to="/">
        Retour vers la home
      </Link>
    </div>
  );
};
