import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(
  <App title="hello world2!"/>,
  document.getElementById('app')
);

module.hot.accept();