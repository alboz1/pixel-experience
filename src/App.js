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
          <Home path='/' />
          <Devices path='/devices' />
          <Team path='/team' />
          <About path='/about' />
          <DownloadPage path='/download/:deviceName' />
          <NotFound default />
        </Router>
    </Provider>
  );
}

export default App;