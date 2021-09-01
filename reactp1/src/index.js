import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Todolist from './Todolist';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);