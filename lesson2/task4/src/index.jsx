import React from 'react';
import { createRoot } from 'react-dom/client';
import './list.css';

const container = document.getElementById('root');
const root = createRoot(container);

const todoList = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
);

root.render(todoList);
