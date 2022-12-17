import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

const greetComponent = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world</h1>
    <p className="greeting__text">I am learning React</p>
  </div>
);

root.render(greetComponent);
