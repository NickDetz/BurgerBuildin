import React, { Fragment } from'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from './components/HeaderNav';
import HomePage from './components/HomePage';
import Burger from './components/BuildBurger/Burger';
import BurgerList from './components/BurgerFinderComponents/BurgerList';



const  App = () => {
  return (
    <Fragment>
      <div>
        
        <Router>
        <HeaderNav/>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>

          <Route exact path='/NewBurger'>
            <>
            <Burger/>
            
            </>
          </Route>

            <Route exact path='/Burgers'>
              <>
              <BurgerList/>
              
              </>
            </Route>
        </Switch>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
