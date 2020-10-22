import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DataBase from '../data/db';

export const ToDo = () => {
  const [todoList, updateToDoList] = useState([]);
  const [currentTodoDescription, updateCurrentTodoDescription] = useState("");
  
  //componentDidMount like
  useEffect(() => { updateList() }, []);

  const addTodo = () => {
    const newToDo = {
      created: Date.now(),
      done: false,
      desc: currentTodoDescription
    };
    DataBase.todos.add(newToDo).then(() => updateList());
  };

  const onTextInputChange = (element) => {
    updateCurrentTodoDescription(element.target.value);
  };

  const updateList = () => DataBase.todos.toArray().then(results => updateToDoList(results));

  const onToDoChange = (domElement, toDo) => {
    toDo.done = domElement.target.checked;
    DataBase.todos.put(toDo).then(() => updateList());
  };

  const todosFilteredArray = todoList.filter(todo => (todo.done === false));

  return (
    <div className="container">

      <div className="input-group my-3">
        <input onChange={onTextInputChange} type="text" className="form-control" placeholder="indiquez la description de votre tâche" />
        <button
          disabled={currentTodoDescription.length == 0 ? true : false}
          onClick={addTodo}
          className="btn btn-outline-secondary"
          type="button">Ajout d'une tache</button>
      </div>

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
      
      <Link className="btn btn-primary" to="/">
        Retour vers la home
      </Link>
    </div>
  );
};
