import React, { useState } from "react";

interface Todo {
    id : number;
    task : string; 
}

const TodoApp = () => {
    const [task, setTask] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    
    //making function to add tasks
    const addTask = () => {
        if(task.trim() === "")  return; //if the task is empty, nothing will be returned
        const newTask = {id: Date.now(), task }; //everytime a task is entered, a new unique id will be generated. 
        setTodos([...todos, newTask]); // this will update the todo list, everytime a new task is added, the todo list will be updated and the set task option will become empty
        setTask("")   //clear the input field
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") { // Check if the pressed key is Enter
            addTask(); // Call addTask function
        }
    };

    const deleteTask = (id : number) => {
        setTodos(todos.filter(todo => todo.id !==id)) //it will check the all the tasks that does not have that entered id and then filter it and update the todo list
    };

    return(
        <div className="todo-container">
            <div className="input-section">
                <input 
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your task"
                />

                <button onClick={addTask} 
                disabled= {!task}
                className={task? "active" : "" }>Add Task</button>
            </div>
            
            {/* //map func shows every thing one by one, in this case task will be dispalyed in a list */}
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.task}
                            <button onClick={() => deleteTask(todo.id)}>Delete Task</button>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default TodoApp;