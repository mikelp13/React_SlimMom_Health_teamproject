import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import '../node_modules/modern-normalize/modern-normalize.css';
import App from './components/App';
import './index.css';
import './assets/styles/fonts.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>,

    document.getElementById('root'),
);
