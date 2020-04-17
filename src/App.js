import React from 'react';
import FilterProvider from './state/filter/Provider'
import TodoProvider from './state/todo/Provider'
import TodoApp from './pages/TodoApp/TodoApp'

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <TodoApp />
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
