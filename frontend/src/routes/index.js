import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import LoginView from '../container/auth/loginView';
import Dashboard from '../container/Dashboard';


const Routes = props => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard}/>
        <Route path='/login' exact={true}>
          <LoginView/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
