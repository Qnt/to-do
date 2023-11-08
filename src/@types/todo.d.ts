export type Todo = {
  id: number;
  title: string;
  content: string;
  status: boolean;
};

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export type TodoState = {
  todos: Todo[];
};

type todoReducerAction = {
  type: string;
  payload?: Todo | Todo[] | number;
};
