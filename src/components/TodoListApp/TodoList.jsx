import { useState } from "react";
import "./todo.css";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // get value from input tag
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    // add new task into list of tasks
    const addTask = () => {
        if (newTask.trim() !== "") {
            if (!tasks.includes(newTask)) {
                setTasks([...tasks, newTask]);
            } else {
                console.log("Task already exists!");
            }
            setNewTask(""); // Clear the input after checking and adding the task
        }
    };

    // delete task
    const deleteTask = (index) => {
        const updateTask = tasks.filter((element, i) => i !== index);
        setTasks(updateTask);
    };

    return (
        <div className="container">
            <p className="todo-title">Todo List</p>
            <div>
                <input
                    type="text"
                    placeholder="Add Task..."
                    onChange={handleInputChange}
                    className="todo-input"
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ol className="list-control">
                {tasks.map((task, index) => {
                    return (
                        <li key={index} className="list-todo">
                            <span className="todo-span">
                                {task}
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="btn-delete"
                                >
                                    Delete
                                </button>
                            </span>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default TodoList;
