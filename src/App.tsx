import TodoApp from "./components/Todo";
import "./App.css"

export default function App() {
    return(
        <div className="app-container">
        <div className="background-image"></div>
        <div className="App">
            <h1>ToDo App</h1>
            <TodoApp></TodoApp>
        </div>
        </div>
    )
}