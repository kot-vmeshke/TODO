import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDeleted, onDone, onImportant }) => {
  return (
    <ul className="list-none">
      {todos.length ? (
        todos.map(({ id, ...todoProps }) => (
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
        ))
      ) : (
        <span className="flex items-center w-full justify-center text-violet-600 font-light">
          All done!
        </span>
      )}
    </ul>
  );
};

export default TodoList;
