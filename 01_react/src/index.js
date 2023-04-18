import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Clock from './Clock';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <App/>

      {/* virtual dom : 변경될 요소만 변경된다. */}
      {/* <Clock /> */}
      {/* <h1>Hello World!!</h1>
      <h2>dkd</h2> */}

    </React.StrictMode>
  );
