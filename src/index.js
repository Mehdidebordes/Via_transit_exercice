import React from 'react';
import ReactDOM from 'react-dom';

import logo from './assets/logo_wide_blue.png';
import Line_1 from './assets/T1.png';
import Line_2 from './assets/T2.png';
import Line_3 from './assets/T3.png';
import Line_4 from './assets/T4.png';

import './css/body.css';
import './css/Web_page.css';
import './display_tram_page.js';

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <p className="Title">
          <code>Prochains passages</code>
        </p>
        <img src={logo} className="Logo_viatransit" alt="logo" />
      </header>
      <body className="Page_body">
        <div className="info_zone" id="zone">
          <div className="blindfold_tram">
            <p className="Stop"><code>Arrêt Gare Saint-Roch</code></p>
            <div>
              <img src={Line_1} className="Line_1" alt="Line_1" />
              <img src={Line_2} className="Line_2" alt="Line_2" />
              <img src={Line_3} className="Line_3" alt="Line_3" />
              <img src={Line_4} className="Line_4" alt="Line_4" />
            </div>
          </div>
          <script src="tram.js" defer></script>
        </div>
      </body>
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);