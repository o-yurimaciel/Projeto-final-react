import React from 'react';
import FilterProvider from './state/filter/Provider'
import TodoProvider from './state/todo/Provider'

function App() {
  return (
    <TodoProvider>
      <FilterProvider>
        <h1>my-app</h1>
      </FilterProvider>
    </TodoProvider>
  );
}

export default App;
