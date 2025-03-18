import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
