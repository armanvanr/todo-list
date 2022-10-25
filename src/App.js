import { useState } from 'react';
import './App.css';

const Square = ({ title }) => {
  return (
    <div className='square-style'>
      {title}
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'run 10km' },
    { id: 2, title: 'eat chicken' },
  ]);
return (
  <div>
    <h1>To Do List</h1>

    <input />
    <button>Add</button>

    <div className='list-container'>
      {todos.map((todo) => {
        return (
          <Square
            title={todo.title}
            key={`todo-${todo.id}`} />)
      })}
    </div>
  </div>
);

};

export default App;