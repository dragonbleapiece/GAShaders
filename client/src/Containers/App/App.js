import React from 'react';
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import Banner from '../Banner/Banner.js'
import {Switch, Route, Link} from 'react-router-dom';
import * as THREE from 'three';
import pga3d from '../../Assets/Shaders/pga3d.glsl';
import cga from '../../Assets/Shaders/cga_ganja.glsl';
import './normalize.css';
import './App.css';

THREE.ShaderChunk.pga3d = pga3d;
THREE.ShaderChunk.cga = cga;

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
