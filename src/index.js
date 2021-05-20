import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Suspense fallback={<div className="d-none">Loading</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Suspense fallback={<div className="d-none">Loading</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
}
// ReactDOM.render(
//   <React.StrictMode>
//     <Suspense fallback={<div className="d-none">Loading</div>}><App/></Suspense>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
serviceWorker.unregister();
