import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import NewReview from './reviews/pages/NewReview';
import UserReviews from './reviews/pages/UserReviews';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import EditReview from './reviews/pages/EditReview';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);  //usedcallback is used so that the login function is not recreated unnecessarily


  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);  //usedcallback is used so that the logout function is not recreated unnecessarily

  let routes;

  if (isLoggedIn) {
    routes = (
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
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/reviews" exact>
          <UserReviews />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout
      }
    }>
      <Router>
        <MainNavigation />
        <main>

          {routes}

        </main>
      </Router>
    </AuthContext.Provider>
  );

};

export default App;
