import ReactDOM from 'react-dom/client';
import { App as MyApp }  from './components/App';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            <MyApp />
        </div>
    );
};

root.render(<App />);