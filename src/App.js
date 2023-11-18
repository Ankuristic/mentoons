import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Grid from './Grid';


function App() {
  return (
    // <div className="App">
    //   <Login />
    //   <Grid />
    // </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Grid" component={Grid} />
      </Switch>
    </Router>
  );
}

export default App;