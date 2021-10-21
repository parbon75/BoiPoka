import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewReview from './reviews/pages/NewReview';
import MainNavigation from './shared/components/Navigation/MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/reviews/new" exact>
            <NewReview />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );

};

export default App;
