import { useContext } from 'react';
import { Todo } from '../@types/todo';
import TodoContext from '../store/todo-context';
import classes from './TodoItem.module.css';

function TodoItem({ id, title, content, status }: Todo) {
  const todoCtx = useContext(TodoContext);

  function handleCheck() {
    todoCtx?.updateTodo(id);
  }

  const contentStyle = status
    ? `${classes['todo-item__content']} ${classes.done}`
    : classes['todo-item__content'];

  return (
    <li className={classes['todo-item']}>
      <input
        type="checkbox"
        className="todo-item__checkbox"
        checked={status}
        onChange={handleCheck}
      ></input>
      <div className={contentStyle}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default TodoItem;
