import { useContext } from 'react';
import { Todo } from '../@types/todo';
import TodoContext from '../store/todo-context';
import classes from './TodoItem.module.css';
import Button from './ui/Button';

function TodoItem({ id, title, content, status }: Todo) {
  const todoCtx = useContext(TodoContext);

  function handleCheck() {
    todoCtx?.updateTodo(id);
  }

  function handleDelete() {
    todoCtx?.removeTodo(id);
  }

  return (
    <li className={classes['todo-item']}>
      <input
        type="checkbox"
        className={classes['todo-item__checkbox']}
        checked={status}
        onChange={handleCheck}
      ></input>
      <div className={classes['todo-item__content']}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <button className={classes.delete} onClick={handleDelete}>
        x
      </button>
    </li>
  );
}

export default TodoItem;
