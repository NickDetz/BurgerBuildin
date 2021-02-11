import React, { Fragment } from'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import HomePage from './components/HomePage';
import Burger from './components/BuildBurger/Burger';



const  App = () => {
  return (
    <Fragment>
      <div>
        <HeaderNav/>
        <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>

          <Route exact path='/NewBurger'>
            <>
            <Burger/>
            </>
          </Route>

        </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
