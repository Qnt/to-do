import { createContext } from 'react';
import { TodoContextType } from '../@types/todo';

const TodoContext = createContext<TodoContextType | null>(null);

export default TodoContext;
