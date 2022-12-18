import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.querySelector('#root');

const title = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button type="button">Search</button>
    </div>
  </>
);

ReactDOM.render(title, rootElement);
