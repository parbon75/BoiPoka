import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewReview from './reviews/pages/NewReview';
import UserReviews from './reviews/pages/UserReviews';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import EditReview from './reviews/pages/EditReview';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/reviews" exact>
            <UserReviews />
          </Route>
          <Route path="/reviews/new" exact>
            <NewReview />
          </Route>
          <Route path="/reviews/:reviewId" exact>
            <EditReview />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );

};

export default App;
