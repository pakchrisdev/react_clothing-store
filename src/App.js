import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Shop from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={Shop}></Route>
      </Switch>
    </div>
  );
}

export default App;
