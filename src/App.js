import React from 'react';
import Todos from './components/Todos'
import Todo from './components/Todo'
import AddToDoForm from './components/AddToDoForm'

function App() {
  return (
    <div className="container my-4">
      <h1 className="text-center">ToDos App</h1>
      <Todos />
    </div>
  );
}

export default App;
