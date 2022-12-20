import { createRoot } from 'react-dom/client';
import Search from './Search';
import './index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<Search name="Tom" />);
