import { createRoot } from 'react-dom/client';
import './styles.css';

const root = document.querySelector('#root');

const titleElem = <h1 className="title">Todo List</h1>;

root.render(titleElem);
