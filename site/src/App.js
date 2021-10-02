/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import  Navibar  from './Components/NaviBar';
import  Footer  from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import{Home} from './Home';
import{Users} from './Users';
import{About} from './About';


function App() {
  return (
    <>
    <Router>
    <Navibar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/about" component={About} />
    </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
