import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './components/Root';


it('renders without crashing', () => {
  //const div = document.createElement('div');
  ReactDOM.render(<Root />, document.getElementById('root'));
});
