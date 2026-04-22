import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

 // Toggle complete
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>My Tasks</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task" key={index}>
            
            {/* ✅ Checkbox */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            {/* 📝 Task text */}
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>

            {/* ❌ Delete */}
            <button onClick={() => deleteTask(index)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;