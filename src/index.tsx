import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './containers/Main'
import './base.css'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
