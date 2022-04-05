import { useState } from 'react';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Searchpage from './componentes/Searchpage';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        
        <Switch>
         
          <Route path = '/search'>
          <Searchpage/>
          </Route>

          <Route path = '/'>
          <Home/>
          </Route>
          
          </Switch>
      </Router>
    </div>
  );
}

export default App;
