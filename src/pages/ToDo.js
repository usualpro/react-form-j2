import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ToDo = () => {
    const [todoList, updateToDoList] = useState([]);
    const [currentTodoDescription, updateCurrentTodoDescription] = useState('');
    const addTodo = () => {
        const tabCopy = [...todoList];
        const newToDo = {
            created: Date.now(),
            desc: currentTodoDescription
        };
        tabCopy.push(newToDo);
        updateToDoList(tabCopy);
    }
    const onTextInputChange = (element) =>{
        updateCurrentTodoDescription(element.target.value);
    }
    return <>
        <input onChange={onTextInputChange} placeholder={"indiquez la description de votre tâche"} type="text"/><br />
        <button onClick={addTodo}>Ajout d'une tache</button><br />
        <Link className='btn btn-primary' to='/'>Retour vers la home</Link>
    </>
};