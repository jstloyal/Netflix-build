import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 
import HomeScreen from './pages/home-screen/HomeScreen';
import LoginPage from './pages/login/LoginPage';

import './App.css';

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
