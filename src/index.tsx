import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.scss';
import './styles/Tasks.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
