import React from 'react'
import {Route, Switch} from "react-router-dom";
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Home from './Components/Home';
import './index.css';
import ProfileCard from './Components/ProfileCard';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path ="/about" component={About} />
      <Route path ="/contact" component={Contact} />
      <Route path ="/profile" component={ProfileCard} />
    </Switch>
    </>
  );
}

export default App;