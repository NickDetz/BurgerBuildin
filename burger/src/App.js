import React, { Fragment } from'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import HomePage from './components/HomePage';


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

        </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
