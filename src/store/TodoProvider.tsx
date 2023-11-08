import { ReactNode, useEffect, useReducer } from 'react';
import {
  Todo,
  TodoContextType,
  TodoState,
  todoReducerAction,
} from '../@types/todo';
import TodoContext from './todo-context';

const defaultTodoState: TodoState = {
  todos: [],
};

function todoReducer(state: TodoState, action: todoReducerAction): TodoState {
  switch (action.type) {
    case 'ADD':
      return { todos: [...state.todos, action.payload as Todo] };
    case 'UPDATE': {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
      return { todos: updatedTodos };
    }
    case 'REMOVE': {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload,
      );
      return { todos: updatedTodos };
    }
    case 'LOAD': {
      return { todos: action.payload as Todo[] };
    }
    default:
      return state;
  }
}

function TodoProvider({ children }: { children: ReactNode }) {
  const [todoState, dispatchTodoAction] = useReducer(
    todoReducer,
    defaultTodoState,
  );

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatchTodoAction({
        type: 'LOAD',
        payload: JSON.parse(savedTodos),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoState.todos));
  }, [todoState.todos]);

  function addTodo(todo: Todo): void {
    dispatchTodoAction({ type: 'ADD', payload: todo });
  }

  function updateTodo(id: number): void {
    dispatchTodoAction({ type: 'UPDATE', payload: id });
  }

  function removeTodo(id: number): void {
    dispatchTodoAction({ type: 'REMOVE', payload: id });
  }

  const todoContext: TodoContextType = {
    todos: todoState.todos,
    addTodo: addTodo,
    updateTodo: updateTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodoContext.Provider value={todoContext}>{children}</TodoContext.Provider>
  );
}

export default TodoProvider;
