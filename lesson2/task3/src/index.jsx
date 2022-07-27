import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

function renderSeconds() {
  const seconds = new Date().getSeconds();
  const blockStyle =
    seconds % 2 === 0
      ? { backgroundColor: '#fff', color: '#000' }
      : { backgroundColor: '#000', color: '#fff' };

  const secondsBlock = (
    <div className="seconds" style={blockStyle}>
      Now is {seconds}
    </div>
  );

  root.render(secondsBlock);
}

setInterval(() => renderSeconds(), 1000);
