import React from 'react';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Banner from '../Banner/Banner.js'
import {Switch, Route, Link} from 'react-router-dom';
import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Banner/>
        </Route>
        <Route path='/shader/'>
          <nav>
              <Link to='/'>Home</Link>
          </nav>
        </Route>
      </Switch>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
