import React from 'react';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Devices from './pages/Devices';
import Team from './pages/Team';
import About from './pages/About';
import Provider from './providers/Provider';
import DownloadPage from './pages/DownloadPage';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Provider>
        <Router>
          <Home path={ `${process.env.PUBLIC_URL}/` } />
          <Devices path={ `${process.env.PUBLIC_URL}/devices` } />
          <Team path={ `${process.env.PUBLIC_URL}/team` } />
          <About path={ `${process.env.PUBLIC_URL}/about` } />
          <DownloadPage path={ `${process.env.PUBLIC_URL}/download/:deviceName` } />
          <NotFound default />
        </Router>
    </Provider>
  );
}

export default App;