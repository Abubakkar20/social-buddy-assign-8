import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './Components/PostDetail/PostDetail';

function App() {

  return (

    <Router>
      <Switch>
        <Route path="/Home">
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
