import React from 'react';
import ToDoCreator from './../../containers/ToDoCreator'
import ToDoList from '../../containers/ToDoList';

// import { Container } from './styles';

export default function containers() {
  return (
    <>
      <header>
        <ToDoCreator />
      </header>
      <main>
        <ToDoList />
      </main>
      {/* <footer>filter</footer> */}
    </>
  );
}