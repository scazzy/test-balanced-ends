import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const container = document.createElement('section');
document.body.appendChild(container);

function Root() {
  return (
    <App />
  );
}

ReactDOM.render(<Root />, container);
