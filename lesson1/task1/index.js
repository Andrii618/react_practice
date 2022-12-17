/* eslint-disable no-undef */

const greetDiv = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(greetDiv);

// const root = document.querySelector('#root');

// ReactDOM.render(greetDiv, root);
