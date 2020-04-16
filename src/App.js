import React from 'react';
import FilterProvider from './state/filter/Provider'

function App() {
  return (
    <FilterProvider>
      <h1>my-app</h1>
    </FilterProvider>
  );
}

export default App;
