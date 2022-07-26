/* eslint-disable no-undef */

const root = document.querySelector('#root');
const greetDiv = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

ReactDOM.render(greetDiv, root);
