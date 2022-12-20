import { createRoot } from 'react-dom/client';
import './styles.css';

// function renderSeconds() {
//   const seconds = new Date().getSeconds();
//   const blockStyle =
//     seconds % 2 === 0
//       ? { backgroundColor: '#fff', color: '#000' }
//       : { backgroundColor: '#000', color: '#fff' };

//   const secondsBlock = (
//     <div className="seconds" style={blockStyle}>
//       Now is {seconds}
//     </div>
//   );

//   root.render(secondsBlock);
// }

const container = document.getElementById('root');
const root = createRoot(container);

const themes = [
  {
    backgroundColor: '#fff',
    color: '#000',
  },
  { backgroundColor: '#000', color: '#fff' },
];

const renderClock = () => {
  const currentSeconds = new Date().getSeconds();

  const clockStyles = currentSeconds % 2 ? themes[1] : themes[0];

  const clockComponent = (
    <div className="seconds" style={clockStyles}>
      Now is {currentSeconds}
    </div>
  );

  root.render(clockComponent);
};

setInterval(() => renderClock(), 1000);
