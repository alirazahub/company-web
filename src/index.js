import React from 'react';
import { createRoot } from 'react-dom/client'; //REACT DOM
import Footer from './Components/Footer';
import Header from './Components/Header';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Home from './Components/Home';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProfileCard from './Components/ProfileCard';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Router>
        <Header />

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/services">
                <Services />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/profile">
                <ProfileCard />
            </Route>
            <Route>
                <Error />
            </Route>
        </Switch>
        <Footer />
    </Router>
);
