import { createRoot } from 'react-dom/client';

import './styles.css';

const root = createRoot(document.querySelector('#root'));

const greetElement = (
  <div className="greeting">
    <h1 className="greeting__title">Hello, world!</h1>
    <p className="greeting__text">I&apos;m learning React</p>
  </div>
);

root.render(greetElement);

// const renderGreeting = elem => {
//   const containerElem = document.createElement('div');
//   containerElem.classList.add('greeting');

//   const titleElem = document.createElement('h1');
//   titleElem.classList.add('greeting__title');
//   titleElem.textContent = 'Hello, world!';

//   const textElem = document.createElement('p');
//   textElem.classList.add('greeting__text');
//   textElem.textContent = 'I am learning React';

//   containerElem.append(titleElem, textElem);

//   elem.append(containerElem);
// };

// renderGreeting(rootElement);
