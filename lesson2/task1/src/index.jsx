import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const title = (
  <>
    {' '}
    <input type="text" />
    <button>Search</button>
  </>
);

ReactDOM.render(title, rootElement);
