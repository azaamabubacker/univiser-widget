import ReactDOM from 'react-dom/client';
import WidgetCard from './components/WidgetCard';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.createRoot(container).render(<WidgetCard />);
