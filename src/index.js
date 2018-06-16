import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { register as registerServiceWorker, unregister as unRegisterServiceWorker }  from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

unRegisterServiceWorker();
registerServiceWorker();
