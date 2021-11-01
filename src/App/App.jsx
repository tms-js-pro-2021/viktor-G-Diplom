import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from '../components/LoginPage';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Teachers from '../components/Teachers';

import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Navibar from '../components/Navibar';

export default function App() {
  return (
    <Router>
      <Navibar />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/teachers" component={Teachers}></Route>
        <Route path="/contacts" component={Contacts}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route>
          404 not found <Link to="/login">login</Link>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
