import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';

import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>hats page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
