import ReactDOM from 'react-dom/client';
import { App as MyApp }  from './components/App';
import { Provider } from 'react-redux';
import { store } from './app/store';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
	<Provider store={store}>
	        <div>
	            <MyApp />
	        </div>
        </Provider>
    );
};

root.render(<App />);
