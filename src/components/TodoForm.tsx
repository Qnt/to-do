import { FormEvent, useContext, useRef } from 'react';
import { Todo } from '../@types/todo';
import TodoContext from '../store/todo-context';
import classes from './TodoForm.module.css';
import Button from './ui/Button';

function TodoForm() {
  const todoCtx = useContext(TodoContext);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  function handleSumbit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const titleValue = titleRef.current?.value ?? '';
    const contentValue = contentRef.current?.value ?? '';

    const todo: Todo = {
      id: Math.random(),
      title: titleValue,
      content: contentValue,
      status: false,
    };
    todoCtx?.addTodo(todo);
  }

  return (
    <form onSubmit={handleSumbit} className={classes.form}>
      <div className={classes['form__inputs']}>
        <div className={classes['form__input']}>
          <label htmlFor="name">Title</label>
          <input id="name" type="text" ref={titleRef}></input>
        </div>
        <div className={classes['form__input']}>
          <label htmlFor="content">Text</label>
          <textarea id="content" ref={contentRef}></textarea>
        </div>
      </div>
      <div className={classes['form__actions']}>
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
}

export default TodoForm;
