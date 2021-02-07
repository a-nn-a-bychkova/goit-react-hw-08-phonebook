import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';
console.log('store', store);
console.log('store.store', store.store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
