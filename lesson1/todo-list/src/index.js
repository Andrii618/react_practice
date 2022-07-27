import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElem = document.querySelector('#root');
const titleElem = <h1 className="title">Todo List</h1>;

ReactDOM.render(titleElem, rootElem);
/* first option */

ReactDOM.render(<h1 className="title">Todo List</h1>, document.querySelector('#root'));
/* second option */
