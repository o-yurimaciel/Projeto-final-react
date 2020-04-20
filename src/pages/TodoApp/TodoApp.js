import React from 'react';
import ToDoCreator from './../../containers/ToDoCreator'
import ToDoList from '../../containers/ToDoList';
import ToDoFilter from '../../containers/ToDoFilter';

export default function containers() {
  return (
    <>
      <header>
        <ToDoCreator />
      </header>
      <main>
        <ToDoList />
      </main>
      <footer>
        <ToDoFilter />
      </footer>
    </>
  );
}