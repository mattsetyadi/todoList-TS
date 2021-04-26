import './App.css';

import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import FirstTodo from './Components/FirstTodo';
import Home from './Components/Home';
import React from 'react';
import TodoContainer from './Modules/Todo/TodoContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to="/">Home</Link>
          <Link to="/first-todo">First Todo</Link>
          <Link to="/second-todo">Second Todo</Link>
        </div>
        <Switch>
          <Route path="/second-todo" component={TodoContainer} exact />
          <Route path="/first-todo" component={FirstTodo} exact />
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
