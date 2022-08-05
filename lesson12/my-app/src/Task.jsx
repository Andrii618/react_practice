import React from 'react';
import classNames from 'classnames';

const Task = ({ id, done, text, onToggle, onDelete }) => (
  <li className={classNames('list-item', { 'list-item_done': done })}>
    <input
      type="checkbox"
      className="list-item__checkbox"
      checked={done}
      onChange={() => onToggle(id)}
    />
    <span className="list-item__text">{text}</span>
    <button className="list-item__delete-btn" onClick={() => onDelete(id)}></button>
  </li>
);

export default Task;
