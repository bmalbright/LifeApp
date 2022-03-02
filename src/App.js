import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import AboutMe from './pages/Home';
import Schedule from './pages/Schedule'
import Notes from './pages/Notes';
import Weather from './pages/Weather';
import Password from './pages/Password';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import "./css/App.css";


function App() {
  return (
      <Router>
        <div className='lifeApp'>
          <Navbar />
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/notes" component={Notes} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/password" component={Password} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
