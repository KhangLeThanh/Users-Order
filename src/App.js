import React, { Component } from 'react';
import {  Route, BrowserRouter as Router,  Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Order_List from './components/Order_List';
import Order from './components/Order';


class App extends Component {
  
  
  render() {
      return (
        
        <Router>
            <Switch>
              <Route path="/" component={Login} exact />
              <Route path="/order_list" component={Order_List} />
              <Route path="/orders/:id" component={Order} />

            </Switch>
            
        </Router>
      );
  }
}

export default App;
