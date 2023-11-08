import './App.module.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Wrapper from './components/ui/Wrapper';
import TodoProvider from './store/TodoProvider';

function App() {
  return (
    <TodoProvider>
      <Wrapper>
        <TodoForm />
        <TodoList />
      </Wrapper>
    </TodoProvider>
  );
}

export default App;
