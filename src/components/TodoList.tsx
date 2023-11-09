import { useContext } from 'react';
import TodoContext from '../store/todo-context';
import TodoItem from './TodoItem';
import classes from './TodoList.module.css';

function TodoList() {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes['todo-list']}>
      {todoCtx?.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          content={todo.content}
          status={todo.status}
        />
      ))}
    </ul>
  );
}

export default TodoList;
