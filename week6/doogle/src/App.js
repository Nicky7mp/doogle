import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav'
import Home from './components/Home'
import Advice from './components/Advice'
import DoggoSearch from './components/DoggoSearch'
import CrossbreedGenerator from './components/generator/Generator'
import AgeCalculator from './components/AgeCalc'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Navbar">
          <Nav />

          <Switch>
            <Route exact path="/" render={() => <Home title="Home" />} />
            <Route path="/advice" component={Advice} />
            <Route path="/doggoSearch" component={DoggoSearch} />
            <Route path="/crossbreedGenerator" component={CrossbreedGenerator} />
            <Route path="/ageCalculator" component={AgeCalculator} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
