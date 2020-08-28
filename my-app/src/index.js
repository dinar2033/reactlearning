import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import News from './pages/news'
import NavigationLayout from './components/NavigationLayout'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <NavigationLayout />
    <News />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
