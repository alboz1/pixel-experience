import React from 'react';
import { Router } from '@reach/router';
import Layout from './components/Layout';
import Home from './routes/Home';
import Devices from './routes/Devices';
import Team from './routes/Team';
import About from './routes/About';
import Provider from './providers/Provider';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Provider>
      <Layout>
        <Router>
          <Home path='/' />
          <Devices path='/devices' />
          <Team path='/team' />
          <About path='/about' />
          <NotFound default />
        </Router>
      </Layout>
    </Provider>
  );
}

export default App;