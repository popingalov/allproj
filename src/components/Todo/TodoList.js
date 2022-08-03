export default function TodoList({ todos, deleteTodo, togle }) {
  return (
    <ul>
      {todos.map(({ text, id, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => togle(id)}
          />
          <p>{text}</p>
          <button onClick={() => deleteTodo(id)}>Удалить</button>
        </li>
      ))}
    </ul>
  );
}
