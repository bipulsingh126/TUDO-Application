import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos || []);
  const filter = useSelector((state) => state.filter || 'ALL');
  const searchTerm = useSelector((state) => (state.searchTerm || '').toLowerCase());

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      const matchesFilter = (filter === 'ALL') ||
        (filter === 'COMPLETED' && todo.completed) ||
        (filter === 'INCOMPLETE' && !todo.completed);

      const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  }, [todos, filter, searchTerm]);

  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.length === 0 ? (
        <li className="my-2 text-sm italic">No todos found</li>
      ) : (
        filteredTodos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index} />
        ))
      )}
    </ul>
  );
};

export default TodoList;
