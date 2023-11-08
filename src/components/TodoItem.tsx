import { Todo } from '../@types/todo';
import classes from './TodoItem.module.css';

function TodoItem({ title, content, status }: Todo) {
  return (
    <li className={classes['todo-item']}>
      <input type="checkbox" className="todo-item__checkbox"></input>
      <div className={classes['todo-item__content']}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default TodoItem;
