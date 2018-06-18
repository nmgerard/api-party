import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>API Party </h1>

        <ul>
          <li>
            <NavLink to="/github">GitHub</NavLink>
          </li>
        </ul>  

        <Switch>
    <Route path = '/github' render={() => <h1>GitHub!</h1>}/>
    <Route 
    render={() => (
    <p>To get started, click one of the links above.</p>
    )}
    />
        </Switch>  
      </div>
    );
  }
}

export default App;
