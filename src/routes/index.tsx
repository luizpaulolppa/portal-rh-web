import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import ListEmployees from '../pages/ListEmployees';

import Dashboard from '../components/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Login} exact />
    <Route path="/dashboard" component={Dashboard} exact />
    <Route path="/funcionarios" component={ListEmployees} exact />
  </Switch>
);

export default Routes;