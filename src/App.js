import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/home.js"
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Error from './components/Error.js'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
