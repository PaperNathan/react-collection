import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

// COMPONENTS
import Nav from './layout/Nav';

// ROUTES
import Home from './routes/Home';
import MovieSearch from './routes/MovieSearch';
import SignIn from './routes/SignIn';


// CSS
import '../styles/App.css';

export default class App extends React.Component {
  render() {
    return (
    <>
      <Nav />
      <div className="App">
        <Switch>
          <Route component={MovieSearch} path='/movie-search' />
          <Route component={SignIn} path='/sign-in' />
          <Route component={Home} exact path='/' />
        </Switch>
      </div>
    </>
    );
  }
}
