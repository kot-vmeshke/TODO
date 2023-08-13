import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({todos, onDeleted, onDone, onImportant}) => {

  return (
    <ul className="list-none">
      {todos.map(({ id, ...todoProps }) => (
        <li
          key={id}
          className="p-4 px-6 border-violet-200 border-2 border-b-0 last:border-b-2 flex items-center justify-start">
          <TodoListItem
            {...todoProps}
            onDeleted={() => onDeleted(id)}
            onDone={() => onDone(id)}
            onImportant={() => onImportant(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;