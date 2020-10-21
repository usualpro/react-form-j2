import React from 'react';
import { Link } from 'react-router-dom';

export class ToDoClassVersion extends React.Component {
    state = {
        todoList: [],
        currentTodoDescription: ''
    }
    onTextInputChange = element => {
        this.setState({
            currentTodoDescription: element.target.value
        });
    }
    addTodo = () => {
        const tabCopy = [...this.state.todoList];
        const newToDo = {
            created: Date.now(),
            done: false,
            desc: this.state.currentTodoDescription,
        };
        tabCopy.push(newToDo);
        this.setState({
            todoList: tabCopy
        });
    }
    onToDoChange = (domElement, toDo) => {
        const indexOfTodo = this.state.todoList.indexOf(toDo);
        const tabCopy = [...this.state.todoList];
        tabCopy[indexOfTodo].done = domElement.target.checked;
        this.setState({
            todoList: tabCopy
        });
    };
    render() {
        return <div className="container">
            <input
                onChange={(element) => this.onTextInputChange(element)}
                placeholder={"indiquez la description de votre tâche"}
                type="text"
            />
            <br />
            <p>{JSON.stringify(this.state.todoList)}</p>
            <ul className="list-group">
                {this.state.todoList.map((todo, index) => (
                    <li key={index} className="list-group-item">
                        <input
                            onChange={(element) => this.onToDoChange(element, todo)}
                            className="form-check-input mr-1"
                            type="checkbox"
                            value={todo.done}
                        />
                        {todo.desc}
                    </li>
                ))}
            </ul>
            <button
                disabled={this.state.currentTodoDescription.length == 0 ? true : false}
                onClick={this.addTodo}
            >
                Ajout d'une tache
        </button>
            <br />
            <Link className="btn btn-primary" to="/">
                Retour vers la home
            </Link>
        </div>
    }
};