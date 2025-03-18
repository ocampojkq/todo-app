function TodoList({ tasks, removeTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}{" "}
          <button onClick={() => removeTask(index)} className="btn-red">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
