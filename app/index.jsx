import './normalize.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import history from './libs/history';
import App from './components/App';
import Home from './components/Home';
import PharmacyDetailContainer from './components/PharmacyDetailContainer';
import LoginContainer from './components/LoginContainer';
import SignupContainer from './components/SignupContainer';
import OrdersListContainer from './components/OrdersListContainer';
import NotFound from './components/NotFound';

function main() {
  const app = document.createElement('div');
  app.className = 'App';

  document.body.appendChild(app);

  render((
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
        <Route path="pharmacies/:id" component={PharmacyDetailContainer} />
        <Route path="orders" component={OrdersListContainer} />
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), app);
}

main();
