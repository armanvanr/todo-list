import { useState } from 'react';
import './App.css';

const Square = ({ title, body, isDone }) => {
  return (
    
    <div className='square-style'>
      <p />title: {title}
      <p />context: {body}
      <p />isDone: {isDone}
      {/* if ({isDone} == false) {
        <button onClick={isDone(true)}>done</button>
      } else {
        <button onClick={isDone(false)}>cancel</button>
      } */}
      <button>delete</button>
    </div>
  );
};


const App = () => {
  const [todos, setTodos] = useState([]);

  const [newTitle, setNewTitle] = useState('');
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const [newBody, setNewBody] = useState('');
  const handleChange2 = (event) => {
    setNewBody(event.target.value);
  };

  const [Done, setDone] = useState(false);

  const addNewTodo = () => {
    setTodos([...todos, { title: newTitle, body: newBody, id: Date.now(), isDone: Done }]);
    setNewTitle('');
    setNewBody('');
  };

  return (
    <div>
      <h1>Todo List</h1>

      <p />title <input value={newTitle} onChange={handleChange} /> context <input value={newBody} onChange={handleChange2} />

      <button onClick={addNewTodo}>Add</button>

      <div className='working-list'>
        {todos.map((todo) => {
          return (
            <Square
              title={todo.title}
              body={todo.body}
              key={`todo-${todo.id}`}
              isDone={todo.isDone} />
          )
        })}

      </div>
    </div>
  );

};

export default App;